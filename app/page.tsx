"use client";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Banner from "./components/Banner/index";
import Companies from "./components/Companies/index";
import Work from "./components/Work/index";
import Table from "./components/Table/index";
import Features from "./components/Features/page";
import Simple from "./components/Simple/index";
import CookieConsent from './components/Cookie';

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;

  useEffect(() => {
    Cookies.set('exampleCookie', 'exampleValue', { expires: 7 });
  }, []);

  return (
    <main>
      <Banner />
      {/* <Companies />
      <Work />
      <Table />
      <Features /> */}
      <Simple />
      <CookieConsent />
    </main>
  );
}
