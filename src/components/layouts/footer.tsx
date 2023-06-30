import React from "react";
import logo_img from "../../assets/image/Logo.svg"
import discord_logo from "../../assets/image/socials/DiscordLogo.svg"
import youtube_logo from "../../assets/image/socials/YoutubeLogo.svg"
import twitter_logo from "../../assets/image/socials//TwitterLogo.svg"
import instagram_logo from "../../assets/image/socials/InstagramLogo.svg"


export const Footer = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-6 gap-30 px-40 sm:px-60 md:px-80 py-30 sm:py-40  md:py-50 bg-comBg text-white/60">
      <div className="col-span-2 flex flex-col gap-10 md:gap-20">
        <div className="flex flex-row">
          <img alt=""
            src={logo_img}
            className="max-w-50vw cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-10 lg:max-w-220">
          <span className="cursor-pointer">
            NFT marketplace for Gatochain Foundation.
          </span>

          <span className="cursor-pointer">
            Join our community
          </span>

          <div className="flex flex-row gap-10 flex-wrap">
            <img alt=""
              src={discord_logo}
              className="max-w-30 cursor-pointer"
            />

            <img alt=""
              src={youtube_logo}
              className="max-w-30 cursor-pointer"
            />

            <img alt=""
              src={twitter_logo}
              className="max-w-30 cursor-pointer"
            />

            <img alt=""
              src={instagram_logo}
              className="max-w-30 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-10 md:gap-20">
        <span className="text-1.3r text-white font-semibold cursor-default">
          Explore
        </span>

        <div className="flex flex-col gap-10 lg:max-w-220">
          <span className="cursor-pointer">
            Marketplace
          </span>

          <span className="cursor-pointer">
            Rankings
          </span>

          <span className="cursor-pointer">
            Connect a wallet
          </span>
        </div>
      </div>

      <div className="col-span-3 flex flex-col gap-10 md:gap-20">
        <span className="text-1.3r text-white font-semibold cursor-default">
          Join Our Weekly digest
        </span>

        <div className="flex flex-col gap-10">
          <span className="cursor-pointer">
            Get exclusive promotions & updates straight to your inbox
          </span>

          <div className="max-w-450 h-50 flex flex-col sm:flex-row bg-white text-black/80 rounded-2xl">
            <input type="text"
              placeholder="Enter your email here"
              className="default-input flex-1 w-full px-20"
            />

            <div className="hidden sm:flex items-center justify-center bg-btnBg px-30 rounded-2xl">
              <span className="text-white font-medium cursor-pointer">
                Subscribe
              </span>
            </div>
          </div>

          <div className="max-w-450 h-50 flex sm:hidden items-center justify-center bg-btnBg px-30 rounded-2xl cursor-pointer">
            <span className="text-white font-medium">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}