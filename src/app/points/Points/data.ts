export interface IPoint {
    groupTitle: string
    items: {
        label: string
        value: string
    }[]
}


export const points: IPoint[] = [
    {
        groupTitle: "Staking Participation",
        items: [
            {
                label: "Early Staker Bonus",
                value: "50 pts"
            },
            {
                label: "Volume Staked",
                value: "1 pt/100 HYPE"
            },
            {
                label: "Long-Term Commitment",
                value: "20 pts/month"
            },
        ]
    },
    {
        groupTitle: "Referral Program",
        items: [
            {
                label: "Successful Referral",
                value: "30 pts/referral"
            },
            {
                label: "Referral Milestone",
                value: "100 pts for 10 ref"
            },
            {
                label: "Referral Milestone",
                value: "100 pts for 10 ref"
            },
        ]
    },
    {
        groupTitle: "Ecosystem Integration",
        items: [
            {
                label: "dApp/Project Integration",
                value: "75 pts"
            },
            {
                label: "Liquidity Pool Setup",
                value: "50 pts"
            },
            {
                label: "Partnership News",
                value: "100 pts"
            },
        ]
    },
    {
        groupTitle: "Validator & Node Operator Engagement",
        items: [
            {
                label: "Validator Node Setup",
                value: "100 pts"
            },
            {
                label: "Uptime Bonus",
                value: "50 pts/month"
            },
            {
                label: "Performance Milestone",
                value: "200 pts"
            },
        ]
    },
    {
        groupTitle: "Liquidity Provision",
        items: [
            {
                label: "Liquidity Provider Bonus",
                value: "1 pt/100 HYPE"
            },
            {
                label: "Liquidity Volume Milestone",
                value: "50 pts"
            },
            {
                label: "Trading Winner",
                value: "100 pts"
            },
        ]
    },
    {
        groupTitle: "Security & Bug Reporting",
        items: [
            {
                label: "Report a Bug",
                value: "20 pts/valid report"
            },
            {
                label: "Critical Bug Bounty",
                value: "100 pts/critical bug"
            },
        ]
    },
]