import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import User from "@modules/common/icons/user"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b overflow-hidden border-ui-border-base relative ">
     <Image 
     src={'https://images.unsplash.com/photo-1508162245510-bf2772371e86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
     alt="k"
     height={500}
     width={2000} className="absolute h-fit "/>
      <div className="absolute inset-0 z-10 flex flex-col  text-start small:p-32 gap-6">
        <span>
          <Heading
            level="h3"
            className="text-base leading-10  font-normal"
          >
            Bespoke at its finest
          </Heading>
          <Heading
            level="h2"
            className="text-5xl leading-10 tracking-widest text-ui-fg-subtle font-normal"
          >
            GET UP TO 30% OFF <br/>NEW ARRIVALS          </Heading>
          <Heading
            level="h3"
            className="text-sm leading-10 text-ui-fg-subtle font-normal"
          >
            Developed by Deji Ice
          </Heading>
        </span>
        <LocalizedClientLink
          href="/store"

        >
          <button className="bg-red-500 text-sm px-5 py-3 text-white">
            SHOP NOW
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
