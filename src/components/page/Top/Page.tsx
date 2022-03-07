import Head from "next/head"

import { TopPageView } from "@/components/page/Top/View"

import type { NextPage } from "next"

export const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>daisyUI Slack mock</title>
        <meta
          name="description"
          content="A mock app of Slack made of daisyUI"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🌼</text></svg>"
        />
      </Head>

      <TopPageView />
    </>
  )
}
