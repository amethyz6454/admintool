import { CURRENCIES, GAME_PLAYED, TRANSACTION_METHODS, TRANSACTION_STATUS_STATE, TRANSACTION_TYPES } from "@/utils/Constants";
import { faker } from "@faker-js/faker";
import React from "react";

export const GetAccountBalances = (count: number) => {
    const [accountBalances, setAccountBalances] = React.useState([]);

    const DataFaker = (numAccounts: number) =>
        Array.from({ length: numAccounts }, (_, k) => k).map(() => ({
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.name.fullName(),
            type: faker.helpers.arrayElement(["MAIN", "SUBSTITUTE"]),
            createdAt: faker.date.past().toDateString(),
            balances: Array.from({ length: faker.datatype.number({ min: 0, max: CURRENCIES.length - 1 }) }, (_, c) => c).map(() => ({
                currency: faker.helpers.arrayElement(CURRENCIES),
                balance: faker.datatype.number({ min: 10, max: 100, precision: 0.01 }),
            })),
            subAccounts: Array.from({ length: faker.datatype.number({ min: 0, max: numAccounts }) }, (_, x) => x).map(() => ({
                merchantNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
                merchantName: faker.name.fullName(),
                type: faker.helpers.arrayElement(["MAIN", "SUBSTITUTE"]),
                subAccounts: Array.from({ length: faker.datatype.number({ min: 0, max: numAccounts }) }, (_, y) => y).map(() => ({
                    merchantNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
                    merchantName: faker.name.fullName(),
                    type: faker.helpers.arrayElement(["MAIN", "SUBSTITUTE"]),
                })),
            })),
        }));

    React.useEffect(() => {
        setAccountBalances(DataFaker(count));
    }, [count]);

    return accountBalances;
};

export const GetMerchantsList = (count: number) => {
    const [merchantsList, setMerchantsList] = React.useState([]);

    const DataFaker = (numMerchants: number) =>
        Array.from({ length: numMerchants }, (_, k) => k).map(() => ({
            merchantNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.name.fullName(),
            email: faker.internet.email(),
            companyName: faker.company.name(),
            subMerchants: Array.from({ length: faker.datatype.number({ min: 0, max: numMerchants }) }, (_, x) => x).map(() => ({
                merchantNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
                merchantName: faker.name.fullName(),
                createdAt: faker.date.past().toDateString(),
            })),
        }));

    React.useEffect(() => {
        setMerchantsList(DataFaker(count));
    }, [count]);

    return merchantsList;
};

export const GetTransactionLimits = (count: number) => {
    const [transactionLimits, setTransactionLimits] = React.useState([]);

    const DataFaker = (numLimits: number) =>
        Array.from({ length: numLimits }, (_, k) => k).map(() => ({
            type: faker.helpers.arrayElement(["Deposit", "Withdrawal"]),
            method: faker.helpers.arrayElement(Object.values(TRANSACTION_METHODS)),
            solution: faker.helpers.arrayElement(Object.keys(GAME_PLAYED)),
            currency: faker.helpers.arrayElement(CURRENCIES),
        }));

    React.useEffect(() => {
        setTransactionLimits(DataFaker(count));
    }, [count]);

    return transactionLimits;
};

export const GetCustomersList = (count: number) => {
    const [customersList, setCustomersList] = React.useState([]);

    const DataFaker = (numCustomers: number) =>
        Array.from({ length: numCustomers }, (_, k) => k).map(() => ({
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            customerNumber: faker.datatype.number({ min: 22000000000 }),
            customerName: faker.name.fullName(),
            email: faker.internet.email(),
            mobileNumber: faker.phone.number("+############"),
            city: faker.address.city(),
            country: faker.address.country(),
        }));

    React.useEffect(() => {
        setCustomersList(DataFaker(count));
    }, [count]);

    return customersList;
};

export const GetCustomerTransactions = (count: number) => {
    const [customerTransactions, setCustomerTransactions] = React.useState([]);

    const DataFaker = (numTransactions: number) =>
        Array.from({ length: numTransactions }, (_, k) => k).map(() => ({
            transactionNumber: faker.datatype.number({ min: 22000000000 }),
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.company.name(),
            customer: faker.name.fullName(),
            type: faker.helpers.arrayElement(Object.values(TRANSACTION_TYPES)),
            method: faker.helpers.arrayElement(Object.values(TRANSACTION_METHODS)),
            solution: faker.helpers.arrayElement(Object.keys(GAME_PLAYED)),
            status: faker.helpers.arrayElement(Object.keys(TRANSACTION_STATUS_STATE)),
            currency: faker.helpers.arrayElement(CURRENCIES),
            amount: faker.datatype.number({ min: 0, max: 99999, precision: 0.01 }).toLocaleString(),
            mdrFee: faker.datatype.number({ min: 0, max: 999, precision: 0.01 }).toLocaleString(),
            fixedFee: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toLocaleString(),
            netAmount: faker.datatype.number({ min: 0, max: 9999, precision: 0.01 }).toLocaleString(),
            transactionDate: faker.date.recent(1).toDateString(),
            settledAt: faker.helpers.arrayElement(["", faker.date.recent(1).toDateString()]),
        }));

    React.useEffect(() => {
        setCustomerTransactions(DataFaker(count));
    }, [count]);

    return customerTransactions;
};

export const GetTransactionsList = (count: number) => {
    const [transactionsList, setTransactionsList] = React.useState([]);

    const DataFaker = (numTransactions: number) =>
        Array.from({ length: numTransactions }, (_, k) => k).map(() => ({
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            transactionNumber: faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.name.fullName(),
            customerName: faker.name.fullName(),
            type: faker.helpers.arrayElement(Object.values(TRANSACTION_TYPES)),
            method: faker.helpers.arrayElement(Object.values(TRANSACTION_METHODS)),
            solution: faker.helpers.arrayElement(Object.keys(GAME_PLAYED)),
            status: faker.helpers.arrayElement(Object.keys(TRANSACTION_STATUS_STATE)),
            currency: faker.helpers.arrayElement(CURRENCIES),
            fee: faker.datatype.number({ min: 0, max: 0.5, precision: 0.01 }),
            total: faker.datatype.number({ min: 5, max: 20, precision: 0.01 }),
            settledAt: faker.date.past().toDateString(),
        }));

    React.useEffect(() => {
        setTransactionsList(DataFaker(count));
    }, [count]);

    return transactionsList;
};

export const GetTopUpsBalancesList = (count: number) => {
    const [topUpsBalancesList, setTopUpsBalancesList] = React.useState([]);

    const DataFaker = (numTopUps: number) =>
        Array.from({ length: numTopUps }, (_, k) => k).map(() => ({
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.name.fullName(),
            type: faker.helpers.arrayElement(["MAIN", "SUBSTITUTE"]),
            currency: faker.helpers.arrayElement(CURRENCIES),
            totalWithdrawalAmount: faker.datatype.number({ min: 0, max: 0.5, precision: 0.01 }),
            totalTopUpAmount: faker.datatype.number({ min: 0, max: 20, precision: 0.01 }),
            availableBalance: faker.datatype.number({ min: 0, max: 20, precision: 0.01 }),
        }));

    React.useEffect(() => {
        setTopUpsBalancesList(DataFaker(count));
    }, [count]);

    return topUpsBalancesList;
};

export const GetTopUpsHistoryList = (count: number) => {
    const [topUpsHistoryList, setTopUpsHistoryList] = React.useState([]);

    const DataFaker = (numTopUpsHistory: number) =>
        Array.from({ length: numTopUpsHistory }, (_, k) => k).map((_) => ({
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.name.fullName(),
            transactionNumber: faker.datatype.number({ min: 22000000000 }),
            status: faker.helpers.arrayElement(Object.keys(TRANSACTION_STATUS_STATE)),
            currency: faker.helpers.arrayElement(CURRENCIES),
            transactionDate: faker.date.past().toDateString(),
            topUpAmount: faker.datatype.number({ min: 0, max: 20, precision: 0.01 }),
            topUpFee: faker.datatype.number({ min: 0, max: 0.5, precision: 0.01 }),
            note: faker.lorem.sentence(),
        }));

    React.useEffect(() => {
        setTopUpsHistoryList(DataFaker(count));
    }, [count]);

    return topUpsHistoryList;
};

export const GetExchangeRatesList = (count: number) => {
    const [exchangeRatesList, setExchangeRatesList] = React.useState([]);

    const DataFaker = (numExchangeRate: number) =>
        Array.from({ length: numExchangeRate }, (_, k) => k).map((_) => ({
            baseCurrency: faker.helpers.arrayElement(CURRENCIES),
            exchangeCurrency: faker.helpers.arrayElement(CURRENCIES),
            rate: faker.datatype.number({ min: 0, max: 1, precision: 0.01 }),
            markedUpRates: faker.datatype.number({ min: 0, max: 1, precision: 0.01 }),
            lastUpdate: faker.date.recent(1).toDateString(),
        }));

    React.useEffect(() => {
        setExchangeRatesList(DataFaker(count));
    }, [count]);

    return exchangeRatesList;
};

export const GetMerchantBalancesEntries = (count: number) => {
    const [merchantBalancesEntries, setMerchantBalancesEntries] = React.useState([]);

    const DataFaker = (numMerchantBalance: number) =>
        Array.from({ length: numMerchantBalance }, (_, k) => k).map((_) => ({
            solution: faker.helpers.arrayElement(Object.keys(GAME_PLAYED)),
            currency: faker.helpers.arrayElement(CURRENCIES),
            balance: faker.datatype.number({ min: 0, max: 1, precision: 0.01 }),
        }));

    React.useEffect(() => {
        setMerchantBalancesEntries(DataFaker(count));
    }, [count]);

    return merchantBalancesEntries;
};

export const GetSettlementsEntries = (count: number) => {
    const [settlementsEntries, setSettlementsEntries] = React.useState([]);

    const DataFaker = (numSettlement: number) =>
        Array.from({ length: numSettlement }, (_, k) => k).map((_) => ({
            recordedTime: faker.date.recent(1).toDateString(),
            settlementCutOff: faker.helpers.arrayElement(["", faker.date.recent(1).toDateString()]),
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.company.name(),
            currency: faker.helpers.arrayElement(CURRENCIES),
            settlementTaxNo: faker.datatype.number({ min: 22000000000 }),
            settlementAmount: faker.datatype.number({ min: 0, max: 99999, precision: 0.01 }).toLocaleString(),
            MDRFee: faker.datatype.number({ min: 0, max: 99999, precision: 0.01 }).toLocaleString(),
            fixedFee: faker.datatype.number({ min: 0, max: 500, precision: 0.01 }).toLocaleString(),
            settlementFee: faker.datatype.number({ min: 0, max: 300, precision: 0.01 }).toLocaleString(),
            rollingReverse: faker.datatype.number({ min: 0, max: 2000, precision: 0.01 }).toLocaleString(),
            rrReturn: faker.datatype.number({ min: 0, max: 2000, precision: 0.01 }).toLocaleString(),
            otherFees: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toLocaleString(),
            settlementStatus: faker.helpers.arrayElement(Object.keys(TRANSACTION_STATUS_STATE)),
            settlementDate: faker.helpers.arrayElement(["", faker.date.recent(1).toDateString()]),
        }));

    React.useEffect(() => {
        setSettlementsEntries(DataFaker(count));
    }, [count]);

    return settlementsEntries;
};

export const GetSettlementsTransactionDetailsList = (count: number) => {
    const [settlementsTransactionDetailsList, setSettlementsTransactionDetailsList] = React.useState([]);

    const DataFaker = (numSettlementsTransaction: number) =>
        Array.from({ length: numSettlementsTransaction }, (_, k) => k).map((_) => ({
            recordedTime: faker.date.recent(1).toDateString(),
            settlementCutOff: faker.helpers.arrayElement([null, faker.date.recent(1).toDateString()]),
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.name.fullName(),
            currency: faker.helpers.arrayElement(CURRENCIES),
            settlementTaxNo: faker.datatype.number({ min: 22000000000 }),
            settlementAmount: faker.datatype.number({ min: 0, max: 99999, precision: 0.01 }).toLocaleString(),
            MDRFee: faker.datatype.number({ min: 0, max: 99999, precision: 0.01 }).toLocaleString(),
            FixedFee: faker.datatype.number({ min: 0, max: 500, precision: 0.01 }).toLocaleString(),
            SettlementFee: faker.datatype.number({ min: 0, max: 300, precision: 0.01 }).toLocaleString(),
            RollingReverse: faker.datatype.number({ min: 0, max: 2000, precision: 0.01 }).toLocaleString(),
            RRReturn: faker.datatype.number({ min: 0, max: 2000, precision: 0.01 }).toLocaleString(),
            OtherFees: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toLocaleString(),
            SettlementStatus: faker.helpers.arrayElement(Object.keys(TRANSACTION_STATUS_STATE)),
            SettlementDate: faker.date.recent(1).toDateString(),
        }));

    React.useEffect(() => {
        setSettlementsTransactionDetailsList(DataFaker(count));
    }, [count]);

    return settlementsTransactionDetailsList;
};

export const GetAccountTransactionList = (count: number) => {
    const [accountTransactionList, setAccountTransactionList] = React.useState([]);

    const DataFaker = (numAccountTransaction: number) =>
        Array.from({ length: numAccountTransaction }, (_, k) => k).map((_) => ({
            transactionNumber: faker.datatype.number({ min: 22000000000 }),
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            merchantName: faker.company.name(),
            customer: faker.name.fullName(),
            type: faker.helpers.arrayElement(Object.values(TRANSACTION_TYPES)),
            method: faker.helpers.arrayElement(Object.values(TRANSACTION_METHODS)),
            solution: faker.helpers.arrayElement(Object.keys(GAME_PLAYED)),
            status: faker.helpers.arrayElement(Object.keys(TRANSACTION_STATUS_STATE)),
            currency: faker.helpers.arrayElement(CURRENCIES),
            amount: faker.datatype.number({ min: 0, max: 9999, precision: 0.01 }).toLocaleString(),
            mdrFee: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toLocaleString(),
            fixedFee: faker.datatype.number({ min: 0, max: 100, precision: 0.01 }).toLocaleString(),
            netAmount: faker.datatype.number({ min: 0, max: 9999, precision: 0.01 }).toLocaleString(),
            transactionDate: faker.date.recent(1).toDateString(),
            settledAt: faker.helpers.arrayElement([null, faker.date.recent(1).toDateString()]),
        }));

    React.useEffect(() => {
        setAccountTransactionList(DataFaker(count));
    }, [count]);

    return accountTransactionList;
};

export const GetAccountCustomers = (count: number) => {
    const [accountCustomers, setAccountCustomers] = React.useState([]);

    const DataFaker = (numAccountCustomer: number) =>
        Array.from({ length: numAccountCustomer }, (_, k) => k).map((_) => ({
            accountNumber: "AC" + faker.datatype.number({ min: 22000000000 }),
            customerNumber: faker.datatype.number({ min: 22000000000 }),
            customer: faker.name.fullName(),
            email: faker.internet.email(),
            mobileNumber: faker.phone.number("+############"),
            city: faker.address.city(),
            country: faker.address.country(),
        }));

    React.useEffect(() => {
        setAccountCustomers(DataFaker(count));
    }, [count]);

    return accountCustomers;
};

export const GetTimelineEntries = (count: number) => {
    const [timelineEntries, setTimelineEntries] = React.useState([]);

    const DataFaker = (numTimelineEntry: number) =>
        Array.from({ length: numTimelineEntry }, (_, k) => k).map((_) => ({
            date: faker.date.recent(1).toDateString(),
            note: faker.lorem.sentence(),
        }));

    React.useEffect(() => {
        setTimelineEntries(DataFaker(count));
    }, [count]);

    return timelineEntries;
};
