// @flow

import React from 'react';
import { default as NextApp, Container, type AppInitialProps } from 'next/app';
import Link from 'next/link';
import { Layout, NavLinks, Pagination } from 'mdx-docs';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Apps', path: '/apps' },
];

const components = {
  a: ({ href, ...props }) => (
    <Link href={href}>
      <a {...props} />
    </Link>
  ),
};

export default class DocumentationApp extends NextApp {
  static async getInitialProps({ Component, ctx }: AppInitialProps) {
    let page = {};

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx);
    }

    return { page };
  }

  render() {
    const { Component, page, ...props } = this.props;

    return (
      <Container>
        <Layout {...props} components={components} routes={routes}>
          <Layout.MenuToggle />
          <Layout.Sidebar>
            <NavLinks />
          </Layout.Sidebar>
          <Layout.Main>
            <Component {...page} />
            <Pagination />
          </Layout.Main>
        </Layout>
      </Container>
    );
  }
}
