"use client";
import React from "react"
import Link from "next/link"
import { routes } from "@/app/useDataSource";

type NavigationItem = {
    label: string,
    link: string,
};
type TopLevelNavigationItem = NavigationItem & {
    subMenu?: NavigationItem[]
}
export type NavigationConfig = {
    links: TopLevelNavigationItem[]
}

/**
 * Top navigation bar.
 * Takes a config representing labels and links for each.
 * @param param0 
 * @returns 
 */
export const Navigation = ({config}: {config: NavigationConfig}) => {
    return (
        <>
        <ul
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                position: 'sticky',
                top: '0',
                width: '100%',
                background: 'white',
                borderBottom: '2px solid black',
            }}
        >
            {routes.links.map((entry, i) => {
                return (
                    <li
                        className={entry.subMenu && "dropdown"}
                        key={`nav-item-${i}`}
                    >
                        <TopLevelNavigationItemComponent item={entry}
                        ></TopLevelNavigationItemComponent>
                        {entry.subMenu && <SubNav items={entry.subMenu}></SubNav>}
                    </li>
                )
            })}
        </ul>
        </>
    )
}

const TopLevelNavigationItemComponent = ({item}: {item: TopLevelNavigationItem}) => {
    return (
        <>
        <Link className="nav-link" href={`/${item.link}`}>
            {item.label}
        </Link>
        </>
    )
}

const SubNav = ({items}: {items: NavigationItem[]}) => {
    return (
        <>
        <ul className="dropdown-content">
            {items.map((item, i) => {
                return (
                <li key={`subnav-item-${i}`}><Link className="nav-link" href={item.link}>{item.label}</Link></li>
                )
            })}
        </ul>
        </>
    )
}