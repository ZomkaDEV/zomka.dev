---
title: VPNs are not your friend.
date: 2026-06-28
summary: Yes, even Mullvad!
---
<center><img style="max-width: 450px" src="https://files.catbox.moe/bjledw.webp"></img></center>

# VPN companies sell snake oil.
VPN companies claim to sell trust. They sell it to journalists, pirates, oppressed minorities, and civilians trying to live despite the efforts of their dictatorships.

The pitch is simple: use this app, your traffic gets encrypted, and no one can see what you’re doing. We’re protecting you! :)

Sounds awesome!
But most of the time, that is not what is happening.

TLS already encrypts the actual content of most web traffic. Your ISP generally cannot read your Signal messages, your bank password, or the text of an HTTPS page just because you are not using a VPN.
What your ISP can still see is metadata: where you connect, when you connect, and how much data moves. That matters. Metadata is not harmless and can be used to prevent you from accessing certain services.
But a commercial VPN does not delete that trust problem. It moves it.

Instead of trusting your ISP, you now trust some random company with good branding.

You may say that DPI measures exist, like [ТСПУ](https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F_%D1%83%D0%B3%D1%80%D0%BE%D0%B7%D0%B0%D0%BC), and yeah, you are right.
People in Russia, Iran, China, and other censored networks often do need circumvention tools. Sometimes a VPN is the difference between reaching independent media and being trapped inside a state-controlled internet.

But let’s be honest about what most VPNs are.

If we exclude a [few VPNs actually marketed toward Russians and built around censorship resistance](https://vpn.maximkatz.com/)), almost every mainstream VPN is just WireGuard and/or OpenVPN with a subscription page. Including the main catalyst that caused this blogpost to be written.

---

# Mullvad.

On June 26th, 2026, Flamman, a Swedish news website, has reported that Daniel Berntsson, founder and co-owner of Mullvad, personally donated 5 million Swedish krona (~513,473 USD as of writing this) to Örebropartiet, a party notorious for its "reimmigration" policies. Yikes!
<center>
<img style="max-height: 450px" src="https://i.redd.it/fknloexehp7h1.jpeg"></img>

<sub><sup>(Photo by [u/Medical-Roof-3906](https://www.reddit.com/r/mullvadvpn/comments/1u7ph06/))</sup></sub>
</center>

This is the same company that ran ad campaigns with a “protect vulnerable people from power” message not too long ago.

So here is the problem!
If your company gets rich selling privacy to vulnerable people, then the politics of the people enriched by that company matter. You do not get to sell protection to migrants, dissidents, queer people, journalists, pirates, and Russians bypassing censorship, then turn around and say the owner’s politics are a private matter.

That is bullshit.

A VPN provider is not just another app. It is a chokepoint. It sits between you and the rest of the internet. It can see more than people want to admit. Even if it keeps no logs, even if the tech is solid, even if the engineers are sincere, the whole relationship is still based on trust.

And trust has politics.

One of the main strategies that managed to get Mullvad this big as it is today is catering to torrent users. If you live in a country with strong DMCA enforcement, you had no choice but to either stop pirating content or get a VPN to obfuscate your traffic from your ISP. And sure, there are have been [cases of VPNs snitching on their users torrenting](https://www.techradar.com/news/users-of-this-popular-vpn-service-could-be-subpoenaed-for-watching-one-movie) and Mullvad hasn't done that *yet*, but that's what allowed people to trust Mullvad. And we trusted them too much.

### In 2023, they rugpulled a lot of people by [disabling port forwarding](https://mullvad.net/en/blog/removing-the-support-for-forwarded-ports) citing issues with users abusing it.

For torrent users, this mattered. Port forwarding was not some tiny nerd feature. It made seeding easier. It made private tracker life less painful. It made the VPN more useful as actual infrastructure instead of just a privacy sticker slapped on top of your network traffic.

And it was gone!

That is the problem with trusting companies. They can build themselves on one audience, take the money, change the deal, and tell you it was necessary.

VPNs sell themselves as anti-surveillance infrastructure, but most of them are just private surveillance chokepoints with better vibes. They want the moral glow of helping dissidents while still operating like normal capitalist companies. They want activist aesthetics without accountability.

And when something ugly happens, they retreat into the oldest trick in the book:
"nah bro, that wasn't us, it was one of the guys but not like all of us!"

No. If people rely on your service to pirate, organize, read banned media, evade censorship, or survive hostile states, then the politics behind that service are part of the threat model.

---

# What now?

Having been a loyal customer of Mullvad in the past, I am rather upset at this. But should we stop using VPNs? No.

Use what works. Use what keeps you connected. Use what keeps you safer than the alternative.

But stop treating VPN companies like friends and blindly trusting them for not betraying you in the past.

Stop giving your money to companies that have been caught red handed like Mullvad and PIA, and choose to trust those that you can *for now*. Always keep an eye out for any rugpulls the might pull.

VPNs are not a shield. They are obfuscation. Sometimes useful obfuscation. Sometimes necessary obfuscation.

But most importantly, <u>**VPNs are not your friend**</u>.
