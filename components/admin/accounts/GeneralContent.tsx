import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import { FormButtons } from "@/components/form/Form";
import { SectionGroup, SectionMain, SectionSide } from "@/components/layout/Sections";
import { Grid, GridCol } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";
import AccountActivities from "./AccountActivities";

const AccountGeneral: React.FC<{ title: string }> = ({ title }): JSX.Element => {
    return (
        <SectionGroup>
            <SectionMain>
                <Card.CardContainer>
                    <Card.Header>
                        <Composition wrapper="h4" primary={title} />
                    </Card.Header>
                    <Card.Body enableGrid>
                        <GridCol grid={6}>
                            <Grid>
                                <Composition wrapper="h5" color="secondary" primary="Account Details" />
                                <ListContainer direction="column" itemJustify="space-between" itemBordered>
                                    <ListItem label="Account Number" value="AC252452586398" />
                                    <ListItem label="Merchant Name" value="Jimmy Merchant" />
                                </ListContainer>
                            </Grid>
                        </GridCol>
                        <GridCol grid={6}>
                            <Grid>
                                <Composition wrapper="h5" color="secondary" primary="API Keys" />
                                <ListContainer direction="column" itemJustify="space-between" itemBordered>
                                    <ListItem label="Public Key" value="pk_mGeArdbHkdM5xtkbm0mZ2erlykAOQAgr" />
                                    <ListItem label="Secret Key" value="*************************************hl4b" />
                                </ListContainer>
                                <FormButtons>
                                    <Button color="secondary" appearance="outline" size="sm" startIcon="Copy">
                                        Copy Secret Key
                                    </Button>
                                    <Button color="secondary" appearance="outline" size="sm" startIcon="Refresh">
                                        Refresh Secret Key
                                    </Button>
                                </FormButtons>
                            </Grid>
                        </GridCol>
                    </Card.Body>
                </Card.CardContainer>
            </SectionMain>
            <SectionSide>
                <AccountActivities />
            </SectionSide>
        </SectionGroup>
    );
};

export default AccountGeneral;
