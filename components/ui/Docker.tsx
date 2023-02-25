import React from "react";
import Link from "next/link";
import StyleDocker from "@/sass/components/docker.module.scss";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import classNames from "classnames";
import Badge from "./Badge";
import useClickOutside from "@/hooks/useClickOutside";

interface DockerItemProps {
    disabled?: boolean;
    href?: string;
    icon?: TypeIconNames;
    notify?: React.ReactNode;
    notifyCount?: number;
    onClick?: () => void;
    selected?: boolean;
}
export type DockerItemTypes = Array<DockerItemProps & { title: string; divider?: boolean }>;

const DockerItemContainer: React.FC<DockerItemProps & { children: React.ReactNode }> = ({
    children,
    href,
}): JSX.Element => {
    return href ? (
        <Link href={href}>
            <a className={StyleDocker.link}>{children}</a>
        </Link>
    ) : (
        <div className={StyleDocker.link}>{children}</div>
    );
};

const DockerItem: React.FC<DockerItemProps & { title: string }> = ({
    disabled = false,
    href,
    icon,
    notify,
    notifyCount = null,
    onClick,
    selected = false,
    title,
}): JSX.Element => {
    return (
        <div
            className={classNames(StyleDocker.item, { [StyleDocker.active]: selected, disabled: disabled })}
            onClick={onClick}
        >
            <DockerItemContainer href={href}>
                {notify && (
                    <Badge
                        shape="circle"
                        size={notifyCount ? 16 : 8}
                        className={StyleDocker.badge}
                        entry={notifyCount}
                    />
                )}
                {icon && (
                    <div className={StyleDocker.icon}>
                        <Icon name={icon} />
                    </div>
                )}
                <div className={StyleDocker.text}>{title}</div>
            </DockerItemContainer>
        </div>
    );
};

DockerItem.displayName = "DockerItem";

interface DockerItemGroupProps {
    disabled?: boolean;
    href?: string;
    icon?: TypeIconNames;
    items?: DockerItemTypes;
    notify?: React.ReactNode;
    notifyCount?: number;
    title?: string;
    divider?: boolean;
}

export type DockerItemGroupType = Array<DockerItemGroupProps>;

const DockerItemGroup: React.FC<DockerItemProps & DockerItemGroupProps> = ({
    disabled = false,
    href,
    icon,
    items,
    notify,
    notifyCount = null,
    title,
}): JSX.Element => {
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);
    const dockerGroupRef = React.useRef(null);

    useClickOutside(dockerGroupRef, () => setOpenMenu(false));

    return (
        <div className={StyleDocker.group} ref={dockerGroupRef}>
            <DockerItem
                disabled={disabled}
                href={href}
                icon={icon}
                notify={notify}
                notifyCount={notifyCount}
                onClick={() => setOpenMenu(!openMenu)}
                selected={openMenu}
                title={title}
            />
            <div className={classNames(StyleDocker.itemList, { [StyleDocker.active]: openMenu })}>
                {items.map((item, k) => (
                    <DockerItem
                        key={k}
                        disabled={item.disabled}
                        href={item.href}
                        icon={item.icon}
                        notify={item.notify}
                        notifyCount={item.notifyCount}
                        onClick={() => {
                            item.onClick && item.onClick();
                            setOpenMenu(false);
                        }}
                        selected={item.selected}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
};

DockerItemGroup.displayName = "DockerItemGroup";

const Docker: React.FC<{ items?: DockerItemTypes; groupItems?: DockerItemGroupType }> = ({
    items,
    groupItems,
}): JSX.Element => {
    return (
        <div className={StyleDocker.wrapper}>
            <div className={StyleDocker.docker}>
                {groupItems?.map((item, k) => (
                    <React.Fragment key={k}>
                        <DockerItemGroup
                            items={item.items}
                            href={item.href}
                            icon={item.icon}
                            notify={item.notify}
                            notifyCount={item.notifyCount}
                            title={item.title}
                        />
                        {item.divider && <div className={StyleDocker.divider} />}
                    </React.Fragment>
                ))}
                {items?.map((item, k) => (
                    <React.Fragment key={k}>
                        <DockerItem
                            disabled={item.disabled}
                            href={item.href}
                            icon={item.icon}
                            notify={item.notify}
                            notifyCount={item.notifyCount}
                            onClick={item.onClick}
                            selected={item.selected}
                            title={item.title}
                        />
                        {item.divider && <div className={StyleDocker.divider} />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Docker;
