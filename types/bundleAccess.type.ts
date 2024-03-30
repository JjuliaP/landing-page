export type BundleAccess = {
    title: string,
    icon: string,
    showMasterclass: boolean,
    order:number,
    data:
        {
            name: string,
            isIncluded: boolean,
            isBold?: boolean,
        }[]
}