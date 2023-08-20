import { NavigationConfig } from "../../components/navigation";

/**
 * Mapping of routes to back end controller endpoint
 */
export const dataSources: {[key in string]: string} = {
    "news": "news",
    "shopping": "shopping",
    "technology": "technology",
    "alle themen": "alle_themen"
};
export const routes: NavigationConfig = {
    links: [
        {
            label: "news",
            link: "news",
        },
        {
            label: "shopping",
            link: "shopping",
        },
        {
            label: "technology",
            link: "technology",
            subMenu: [
                {
                    label: "news",
                    link: "news"
                },
                {
                    label: "counselor",
                    link: "counselor"
                },
                {
                    label: "top lists & tests",
                    link: "top_lists_and_tests"
                },
            ]
        },
        {
            label: "lifestyle",
            link: "lifestyle",
            subMenu: [
                {
                    label: "karriere",
                    link: "career"
                },
                {
                    label: "essen & trinken",
                    link: "eat_drink"
                },
                {
                    label: "wohnen & design",
                    link: "living_and_design"
                },
                {
                    label: "reise",
                    link: "living_and_design"
                },
                {
                    label: "gesellschaft",
                    link: "living_and_design"
                },
                {
                    label: "beziehung",
                    link: "living_and_design"
                },
            ]
        },
        {
            label: "entertainment",
            link: "entertainment",
        },
        {
            label: "sustainability",
            link: "sustainability",
        },
    ]
}
export const useDataSource = (target: string): string => {
    // if not found, should do some other thing...
    return dataSources[target] ?? "news";
}