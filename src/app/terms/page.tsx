"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBanner from "@/components/TopBanner";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowLeft,
  Search,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
} from "lucide-react";

interface Section {
  id: string;
  num: number;
  title: string;
  tag: string;
  accentColor: string;
  badgeBg: string;
  content: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: "section-1",
    num: 1,
    title: "About Creatathon",
    tag: "OVERVIEW",
      accentColor: "#0054D9",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Creatathon is a platform focused on the creator economy, bringing together creators, brands, industry professionals and communities through events, programs, experiences, opportunities and collaborations.
          </p>
          <p>
            Creatathon may offer different events, programs, campaigns, experiences and opportunities from time to time. Specific activities may be subject to additional terms, eligibility requirements or guidelines communicated separately.
          </p>
        </div>
      ),
    },
    {
      id: "section-2",
      num: 2,
      title: "Definitions",
      tag: "KEY TERMS",
      accentColor: "#FF0052",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p className="font-semibold text-black">For the purposes of these Terms:</p>
          <div className="grid grid-cols-1 gap-3 pt-1">
            {[
              {
                term: "“Creatathon,” “we,” “us” or “our”",
                desc: "Refers to the organisation operating the Creatathon platform and its authorised representatives.",
                bg: "bg-[#FDF9EB]",
              },
              {
                term: "“Website”",
                desc: "Refers to the Creatathon website and related digital platforms operated by or on behalf of Creatathon.",
                bg: "bg-white",
              },
              {
                term: "“Participant,” “you” or “your”",
                desc: "Refers to any person accessing the Website, registering for an event, submitting an application or participating in a Creatathon activity.",
                bg: "bg-[#FDF9EB]",
              },
              {
                term: "“Event”",
                desc: "Refers to any Creatathon event, program, experience, activation, workshop, gathering or activity.",
                bg: "bg-white",
              },
              {
                term: "“Content”",
                desc: "Refers to text, photographs, videos, graphics, designs, applications, submissions and other materials provided, uploaded, submitted or made available through Creatathon.",
                bg: "bg-[#FDF9EB]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_#000000] ${item.bg}`}
              >
                <span className="font-bold text-[#0054D9] font-jetbrains text-sm block mb-1">
                  {item.term}
                </span>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#27272A]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "section-3",
      num: 3,
      title: "Website Use",
      tag: "ACCEPTABLE USE",
      accentColor: "#00D890",
      badgeBg: "#0054D9",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            You agree to use the Creatathon Website only for lawful and legitimate purposes and in accordance with these Terms.
          </p>
          <div className="bg-[#FFF4F6] p-4 sm:p-5 rounded-xl border-[2px] border-[#FF0052] shadow-[3px_3px_0px_#FF0052]">
            <p className="font-bold text-[#FF0052] mb-3 uppercase font-jetbrains text-xs tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" /> You must not:
            </p>
            <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#18181B]">
              {[
                "Use the Website in a way that violates applicable laws or regulations.",
                "Attempt to gain unauthorised access to the Website, servers, systems or networks.",
                "Interfere with the security, operation or functioning of the Website.",
                "Submit false, misleading, inaccurate or fraudulent information.",
                "Impersonate another person, creator, brand, organisation or entity.",
                "Use the Website to distribute harmful, offensive, unlawful or malicious material.",
                "Introduce viruses, malware or other harmful technologies.",
                "Copy, reproduce, distribute or commercially exploit Creatathon content without appropriate permission.",
                "Use the Website for unauthorised commercial, promotional or solicitation purposes.",
                "Attempt to access or collect information belonging to other users without authorisation.",
              ].map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0052] mt-2 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#4B5563] italic">
            We reserve the right to restrict, suspend or terminate access to the Website where we reasonably believe that these Terms have been violated or where such action is necessary to protect the Website, Creatathon, participants or other users.
          </p>
        </div>
      ),
    },
    {
      id: "section-4",
      num: 4,
      title: "Eligibility",
      tag: "REQUIREMENTS",
      accentColor: "#FFD200",
      badgeBg: "#FF0052",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Participation in Creatathon events, programs and opportunities may be subject to specific eligibility requirements.
          </p>
          <p>
            Eligibility may depend on factors such as age, location, category, professional background, availability, event capacity or other criteria communicated for a particular activity.
          </p>
          <p>
            Where applicable, participants are responsible for ensuring that they meet the eligibility requirements before submitting an application or registration.
          </p>
          <div className="p-3.5 bg-[#FFFAE5] rounded-xl border-[2px] border-black text-sm font-medium">
            💡 Creatathon may request additional information or documentation to verify eligibility.
          </div>
        </div>
      ),
    },
    {
      id: "section-5",
      num: 5,
      title: "Registrations and Applications",
      tag: "APPLICATIONS",
      accentColor: "#0054D9",
      badgeBg: "#00D890",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Certain Creatathon events, programs or opportunities may require registration or an application.
          </p>
          <p>
            By submitting information through the Website or any authorised Creatathon registration or application channel, you confirm that the information provided is accurate, complete and up to date to the best of your knowledge.
          </p>
          <div className="bg-[#EFF6FF] p-4 sm:p-5 rounded-xl border-[2px] border-[#0054D9] shadow-[3px_3px_0px_#0054D9]">
            <p className="font-bold text-[#0054D9] mb-2 font-jetbrains text-xs uppercase tracking-wider">
              Submitting an application or registration does NOT automatically guarantee:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[14px] text-[#1E293B]">
              {[
                "Participation in an event",
                "Selection for a program",
                "Collaboration with a brand or creator",
                "Access to an opportunity",
                "Admission to an event",
                "Any other benefit or opportunity",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#FF0052] font-bold text-base">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            Creatathon reserves the right to review, accept, reject or modify participation based on eligibility, capacity, relevance, event requirements, operational considerations or other reasonable criteria.
          </p>
          <p className="text-sm text-[#4B5563]">
            Creatathon may contact applicants using the contact details provided during registration or application.
          </p>
        </div>
      ),
    },
    {
      id: "section-6",
      num: 6,
      title: "Event Participation and Conduct",
      tag: "CODE OF CONDUCT",
      accentColor: "#FF0052",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Participants are expected to behave responsibly, respectfully and lawfully during Creatathon events and activities.
          </p>
          <p className="font-semibold text-black">
            Creatathon reserves the right to deny entry, remove a participant or restrict participation where an individual’s behaviour:
          </p>
          <ul className="space-y-2 text-[14px] sm:text-[15px]">
            {[
              "Disrupts the event or activities;",
              "Creates a safety or security concern;",
              "Harasses, threatens or intimidates another person;",
              "Involves discriminatory, abusive or inappropriate conduct;",
              "Damages or threatens to damage property;",
              "Violates applicable laws;",
              "Violates event-specific rules; or",
              "Fails to comply with reasonable instructions provided by the Creatathon team.",
            ].map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FF0052] mt-2 shrink-0" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          <div className="p-3 bg-[#FDF9EB] rounded-xl border-[2px] border-black text-sm text-[#27272A]">
            Any decision relating to event safety, security, operations or participant conduct may be made at the reasonable discretion of the Creatathon team.
          </div>
        </div>
      ),
    },
    {
      id: "section-7",
      num: 7,
      title: "Event Changes, Postponement or Cancellation",
      tag: "CHANGES & REFUNDS",
      accentColor: "#00D890",
      badgeBg: "#0054D9",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Creatathon may change, reschedule, postpone, modify or cancel an event, program, speaker, activity, venue, schedule or other aspect of an experience where reasonably necessary.
          </p>
          <p>
            Changes may occur due to operational, safety, weather, regulatory, technical, venue-related or other circumstances beyond Creatathon’s reasonable control.
          </p>
          <p>
            Where practical, significant changes will be communicated to registered participants using the contact information provided during registration.
          </p>
          <p className="text-sm font-medium text-[#4B5563] bg-white p-3.5 rounded-xl border-[1.5px] border-black/30">
            Creatathon will not be responsible for losses or expenses arising from event changes or cancellations to the extent permitted by applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "section-8",
      num: 8,
      title: "User Content and Submissions",
      tag: "IP & SUBMISSIONS",
      accentColor: "#0054D9",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Participants may be invited to submit information, photographs, videos, creative work, portfolios, social media profiles, ideas or other materials as part of an application, registration, event or program.
          </p>
          <div className="p-4 bg-white rounded-xl border-[2px] border-black shadow-[2px_2px_0px_#000000]">
            <p className="font-bold text-black mb-2 text-sm uppercase font-jetbrains">You confirm that:</p>
            <ul className="space-y-1.5 text-sm text-[#27272A]">
              {[
                "You have the necessary rights and permissions to submit the material;",
                "The material does not knowingly infringe another person’s intellectual property, privacy or other legal rights;",
                "The material does not contain unlawful, defamatory, fraudulent or malicious content; and",
                "The information provided is accurate to the best of your knowledge.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D890] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-bold text-[#0054D9]">
            Unless otherwise agreed in writing, you retain ownership of intellectual property rights in original materials that you submit.
          </p>
          <p>
            By submitting content to Creatathon, you grant Creatathon a non-exclusive, royalty-free permission to access, review, store and use the submitted material for purposes reasonably connected with operating, evaluating, administering and promoting the relevant Creatathon event, program or opportunity, subject to our Privacy Policy and any additional terms communicated to you.
          </p>
          <p className="text-sm text-[#4B5563]">
            Any commercial use, licensing or transfer of ownership of submitted creative work will be subject to separate terms where applicable.
          </p>
        </div>
      ),
    },
    {
      id: "section-9",
      num: 9,
      title: "Photography, Videography and Media",
      tag: "MEDIA & RECORDINGS",
      accentColor: "#FF0052",
      badgeBg: "#00D890",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Creatathon events and activities may be photographed, filmed, recorded, livestreamed or otherwise documented.
          </p>
          <p>
            By attending or participating in a Creatathon event, you acknowledge that you may appear in photographs, videos, recordings or other event-related content.
          </p>
          <div className="bg-[#FFFAE5] p-4 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_#000000]">
            <p className="font-bold text-black mb-2 text-sm uppercase font-jetbrains">Such content may be used for legitimate Creatathon purposes, including:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold uppercase font-jetbrains">
              {[
                "Event coverage",
                "Social media",
                "Marketing & promo",
                "Website content",
                "Future event promo",
                "Public relations",
                "Documentation",
                "Archival purposes",
                "Communications",
              ].map((use, idx) => (
                <div key={idx} className="bg-white px-2.5 py-1.5 rounded-lg border border-black text-center text-[#18181B]">
                  {use}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-[#4B5563]">
            If you have a specific concern regarding your appearance in event content, you may contact the Creatathon team using the contact details provided below. We will consider reasonable requests where practicable. However, we may not always be able to remove content that has already been published, distributed or incorporated into materials.
          </p>
          <p className="text-sm text-[#4B5563]">
            Any specific consent requirements applicable to a particular campaign, collaboration or commercial content production may be communicated separately.
          </p>
        </div>
      ),
    },
    {
      id: "section-10",
      num: 10,
      title: "Intellectual Property",
      tag: "BRANDING & IP",
      accentColor: "#0054D9",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            All Creatathon branding, logos, names, website content, graphics, visual identity, event concepts, text, designs, videos, photographs and other original materials are owned by or used with permission by Creatathon or their respective rights holders.
          </p>
          <p>
            You may access and use the Website and its content for personal and legitimate purposes only.
          </p>
          <div className="p-4 bg-white rounded-xl border-[2px] border-black">
            <p className="font-bold text-black mb-2 text-sm uppercase font-jetbrains">Unless permitted by applicable law or with prior written permission, you may not:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#18181B]">
              {[
                "Copy or reproduce Creatathon materials",
                "Modify or adapt Creatathon materials",
                "Distribute or republish Creatathon materials",
                "Use Creatathon branding or logos commercially",
                "Create derivative works from Creatathon materials",
                "Exploit Creatathon materials for commercial purposes",
              ].map((rule, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#FF0052] font-bold">✕</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-[#6B7280]">
            All third-party trademarks, logos and intellectual property remain the property of their respective owners.
          </p>
        </div>
      ),
    },
    {
      id: "section-11",
      num: 11,
      title: "Communications",
      tag: "NOTICES & CHANNELS",
      accentColor: "#00D890",
      badgeBg: "#0054D9",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            By providing your contact information and registering, applying or interacting with Creatathon, you may receive communications relating to your registration, application, participation or relevant Creatathon activities.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-sm font-bold self-center mr-2">Authorized Channels:</span>
            {["WhatsApp", "Email", "SMS", "Official Platforms"].map((ch, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#FDF9EB] text-black font-jetbrains text-xs font-bold rounded-lg border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000]"
              >
                {ch}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#4B5563]">
            You may opt out of promotional communications where applicable. However, essential communications relating to registrations, applications, event changes, participation, safety or other necessary administrative matters may still be sent.
          </p>
        </div>
      ),
    },
    {
      id: "section-12",
      num: 12,
      title: "Privacy and Personal Data",
      tag: "DATA PRIVACY",
      accentColor: "#FF0052",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Your use of the Creatathon Website and services is also governed by our Privacy Policy.
          </p>
          <p>
            By using the Website, registering for an event or submitting information, you acknowledge that your personal information may be collected, processed, stored and used in accordance with the Privacy Policy and applicable data-protection laws.
          </p>
          <p>
            The Privacy Policy explains how Creatathon collects, uses, stores and handles personal information and the rights and choices available to you.
          </p>
          <p className="text-sm text-[#4B5563]">
            Where consent is required by applicable law, Creatathon will obtain such consent through appropriate means. You may contact Creatathon using the details provided below for questions or requests relating to your personal information.
          </p>
        </div>
      ),
    },
    {
      id: "section-13",
      num: 13,
      title: "Third-Party Websites and Services",
      tag: "THIRD PARTIES",
      accentColor: "#FFD200",
      badgeBg: "#0054D9",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            The Creatathon Website or communications may contain links to third-party websites, platforms, applications or services.
          </p>
          <p>
            These may include social media platforms, registration systems, payment providers, ticketing platforms, communication services or other external websites.
          </p>
          <div className="p-3.5 bg-white rounded-xl border-[1.5px] border-black text-sm text-[#374151]">
            Creatathon does not control and is not responsible for the content, availability, security, policies or practices of third-party websites or services.
          </div>
          <p className="text-sm text-[#4B5563]">
            Your use of third-party services may be subject to their own terms and privacy policies. You are responsible for reviewing those terms before using such services.
          </p>
        </div>
      ),
    },
    {
      id: "section-14",
      num: 14,
      title: "Disclaimers",
      tag: "DISCLAIMERS",
      accentColor: "#0054D9",
      badgeBg: "#FF0052",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p className="font-bold text-black uppercase font-jetbrains text-sm">
            The Creatathon Website and its content are provided on an “as available” basis.
          </p>
          <div className="bg-[#FFF4F6] p-4 rounded-xl border-[2px] border-black">
            <p className="text-sm font-semibold text-[#18181B] mb-2">
              While we make reasonable efforts to maintain accurate and reliable information, we do not guarantee that:
            </p>
            <ul className="space-y-1.5 text-sm text-[#374151]">
              {[
                "The Website will always be available or uninterrupted;",
                "The Website will be free from errors or technical issues;",
                "All information will always be complete, accurate or current; or",
                "The Website will be free from viruses or other harmful components.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0052] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-[#4B5563]">
            Creatathon may update, modify or remove Website content, features or functionality at any time without prior notice where reasonably necessary.
          </p>
          <p className="text-xs text-[#6B7280]">
            Nothing in these Terms excludes or limits any rights or protections that cannot legally be excluded under applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "section-15",
      num: 15,
      title: "Limitation of Liability",
      tag: "LIABILITY",
      accentColor: "#FF0052",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            To the maximum extent permitted by applicable law, Creatathon and its authorised representatives will not be liable for indirect, incidental, consequential or special losses arising from or relating to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              "Your use of or inability to use the Website",
              "Participation in or inability to participate in an event or program",
              "Changes, postponement or cancellation of an event",
              "Third-party websites, platforms or services",
              "Technical interruptions or failures",
              "Information submitted by other participants",
              "Any other circumstances beyond Creatathon’s reasonable control",
            ].map((item, idx) => (
              <div key={idx} className="p-2.5 bg-white rounded-lg border border-black flex items-start gap-2">
                <span className="text-[#FF0052] font-bold">•</span>
                <span className="text-xs text-[#1F2937] font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#4B5563]">
            Nothing in these Terms limits liability where such limitation is prohibited by applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "section-16",
      num: 16,
      title: "Indemnification",
      tag: "INDEMNITY",
      accentColor: "#00D890",
      badgeBg: "#0054D9",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            To the extent permitted by applicable law, you agree to be responsible for losses, claims, liabilities, damages, costs or expenses arising from your:
          </p>
          <ul className="space-y-2 text-sm">
            {[
              "Violation of these Terms;",
              "Unlawful or unauthorised use of the Website;",
              "Misconduct during a Creatathon event;",
              "Infringement of another person’s intellectual property or other legal rights; or",
              "Submission of content or information that you do not have the right to provide.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00D890] mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "section-17",
      num: 17,
      title: "Force Majeure",
      tag: "EVENTS BEYOND CONTROL",
      accentColor: "#FFD200",
      badgeBg: "#FF0052",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Creatathon will not be responsible for delays, interruptions, cancellations or failure to perform its obligations where caused by circumstances beyond its reasonable control.
          </p>
          <p className="text-sm text-[#4B5563] bg-white p-3.5 rounded-xl border-[1.5px] border-black/30">
            Such circumstances may include natural disasters, severe weather, public-health emergencies, government restrictions, regulatory changes, strikes, civil disturbances, technical failures, venue issues, security concerns or other unforeseen events.
          </p>
        </div>
      ),
    },
    {
      id: "section-18",
      num: 18,
      title: "Changes to These Terms",
      tag: "AMENDMENTS",
      accentColor: "#0054D9",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            Creatathon may update or modify these Terms from time to time to reflect changes in our services, events, operations, legal requirements or other circumstances.
          </p>
          <p>
            The updated Terms will be published on the Website with the revised Effective Date or Last Updated date.
          </p>
          <p className="font-semibold text-black">
            Your continued use of the Website after updated Terms are published constitutes acceptance of the updated Terms to the extent permitted by applicable law.
          </p>
        </div>
      ),
    },
    {
      id: "section-19",
      num: 19,
      title: "Governing Law and Jurisdiction",
      tag: "JURISDICTION",
      accentColor: "#FF0052",
      badgeBg: "#00D890",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <div className="p-4 bg-[#EFF6FF] rounded-xl border-[2px] border-[#0054D9] shadow-[3px_3px_0px_#0054D9]">
            <p className="font-bold text-[#0054D9] font-jetbrains text-sm uppercase mb-1">
              Governing Law
            </p>
            <p className="text-[15px] font-medium text-black mb-3">
              These Terms shall be governed by and interpreted in accordance with the laws of India.
            </p>
            <p className="font-bold text-[#0054D9] font-jetbrains text-sm uppercase mb-1">
              Court Jurisdiction
            </p>
            <p className="text-[14px] text-[#374151]">
              Subject to applicable law, any dispute arising out of or relating to these Terms or your use of the Creatathon Website shall be subject to the jurisdiction of the competent courts in Kochi, Kerala, India.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "section-20",
      num: 20,
      title: "Severability",
      tag: "VALIDITY",
      accentColor: "#00D890",
      badgeBg: "#FF0052",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            If any provision of these Terms is found to be invalid, unlawful or unenforceable, that provision shall be interpreted or modified to the minimum extent necessary to make it enforceable, where permitted by law.
          </p>
          <p className="font-medium text-black">
            The remaining provisions of these Terms will continue to remain in full force and effect.
          </p>
        </div>
      ),
    },
    {
      id: "section-21",
      num: 21,
      title: "Entire Agreement",
      tag: "AGREEMENT",
      accentColor: "#FFD200",
      badgeBg: "#0054D9",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            These Terms, together with the Creatathon Privacy Policy and any additional terms specifically communicated for a particular event, program or opportunity, constitute the agreement governing your use of the Creatathon Website and participation in relevant activities, unless otherwise agreed in writing.
          </p>
        </div>
      ),
    },
    {
      id: "section-22",
      num: 22,
      title: "Contact Us",
      tag: "SUPPORT & INQUIRIES",
      accentColor: "#0054D9",
      badgeBg: "#FFD200",
      content: (
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[160%] text-[#18181B]">
          <p>
            If you have any questions, concerns or requests relating to these Terms, Creatathon events, registrations or your participation, please contact us at:
          </p>
          <div className="p-5 bg-[#FFFAE5] rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FF0052] text-white flex items-center justify-center font-bold text-sm shrink-0 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                ✉️
              </div>
              <div>
                <span className="text-xs font-bold uppercase font-jetbrains text-[#6B7280] block">Email</span>
                <a
                  href="mailto:contact@creatathon.in"
                  className="font-bold text-[#0054D9] hover:underline text-base"
                >
                  contact@creatathon.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0054D9] text-white flex items-center justify-center font-bold text-sm shrink-0 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                📍
              </div>
              <div>
                <span className="text-xs font-bold uppercase font-jetbrains text-[#6B7280] block">Address</span>
                <span className="font-semibold text-black text-sm">
                  Creatathon Official, Kochi, Kerala, India
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#00D890] text-black flex items-center justify-center font-bold text-sm shrink-0 border-[1.5px] border-black shadow-[1.5px_1.5px_0px_#000000]">
                🌐
              </div>
              <div>
                <span className="text-xs font-bold uppercase font-jetbrains text-[#6B7280] block">Website</span>
                <Link href="/" className="font-bold text-[#0054D9] hover:underline text-sm">
                  creatathon.in
                </Link>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#6B7280] italic">
            For privacy or personal-data related requests, please refer to the contact details provided in our Privacy Policy.
          </p>
        </div>
      ),
    },
  ];

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("section-1");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionElements = SECTIONS.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      const scrollPosition = window.scrollY + 200;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = (id: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/terms#${id}`;
      navigator.clipboard.writeText(url);
      setCopiedSection(id);
      setTimeout(() => setCopiedSection(null), 2000);
    }
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SECTIONS;
    const q = searchQuery.toLowerCase();
    return SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.tag.toLowerCase().includes(q) ||
        s.num.toString().includes(q)
    );
  }, [searchQuery]);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FDF9EB] text-[#18181B] font-sans antialiased flex flex-col items-center">
      {/* Top Banner (Red Ticker + Yellow Logo Navigation) */}
      <TopBanner />

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-14 flex-1">
        {/* Page Hero Header Banner */}
        <section className="w-full bg-[#0054D9] text-white rounded-3xl border-[3px] border-black shadow-[6px_6px_0px_#000000] p-6 sm:p-10 md:p-12 mb-10 relative overflow-hidden">
          {/* Decorative Background Badges & Stars */}
          <div className="absolute -right-8 -top-8 w-32 h-32 md:w-44 md:h-44 pointer-events-none opacity-90">
            <Image
              src="/elements/star-yellow.svg"
              alt="Yellow Star"
              width={176}
              height={176}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain animate-spin-slow"
            />
          </div>
          <div className="absolute right-24 -bottom-10 w-24 h-24 md:w-36 md:h-36 pointer-events-none opacity-80 hidden sm:block">
            <Image
              src="/elements/flame-pink.svg"
              alt="Pink Flame"
              width={144}
              height={144}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Breadcrumb & Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-jetbrains text-[11px] sm:text-xs font-bold uppercase px-3 py-1 bg-[#FFD200] text-black rounded-md border-[1.5px] border-black shadow-[2px_2px_0px_#000000]">
                LEGAL DOCUMENT
              </span>
              <span className="font-jetbrains text-[11px] sm:text-xs font-bold uppercase px-3 py-1 bg-[#00D890] text-black rounded-md border-[1.5px] border-black shadow-[2px_2px_0px_#000000]">
                22 SECTIONS
              </span>
            </div>

            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[105%] mb-4">
              TERMS AND <span className="text-[#FFD200]">CONDITIONS</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-6">
              Welcome to Creatathon. Please read these terms carefully before accessing our website, participating in events, or submitting applications.
            </p>

            {/* Dates Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 border-t border-white/20 font-jetbrains text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-[#FFD200] font-bold">
                <span>EFFECTIVE DATE:</span>
                <span className="text-white font-medium">18 August 2026</span>
              </div>
              <div className="hidden sm:inline-block text-white/40">•</div>
              <div className="flex items-center gap-1.5 text-[#FFD200] font-bold">
                <span>LAST UPDATED:</span>
                <span className="text-white font-medium">18 August 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Notice & Agreement Callout */}
        <section className="w-full bg-[#FFFAE5] rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_#000000] p-5 sm:p-7 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FF0052] text-white flex items-center justify-center font-bold text-lg shrink-0 border-[2px] border-black shadow-[2px_2px_0px_#000000] mt-0.5">
              ⚖️
            </div>
            <div className="space-y-2.5 text-[15px] sm:text-[16px] leading-relaxed text-[#18181B]">
              <h2 className="font-anton text-xl sm:text-2xl uppercase tracking-wide text-black">
                Agreement to Terms
              </h2>
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the Creatathon website, registrations, applications, events, programs, activities, opportunities and related communication channels.
              </p>
              <p className="font-semibold text-black">
                By accessing or using the Creatathon website, registering for an event, submitting an application, participating in a Creatathon program or otherwise interacting with Creatathon, you acknowledge that you have read, understood and agreed to these Terms.
              </p>
              <div className="p-3 bg-[#FFF4F6] rounded-xl border-[1.5px] border-[#FF0052] text-sm text-[#991B1B] font-medium">
                ⚠️ If you do not agree with these Terms, please do not use the website or submit your information through it.
              </div>
            </div>
          </div>
        </section>

        {/* Layout Grid: Sidebar Navigation + Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sticky Sidebar (Desktop Only: TOC & Search) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            {/* Search Filter Box */}
            <div className="bg-white rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] p-4">
              <label htmlFor="terms-search" className="block font-jetbrains text-xs font-bold uppercase text-black mb-2 flex items-center justify-between">
                <span>Filter Sections</span>
                <Search className="w-3.5 h-3.5 text-gray-500" />
              </label>
              <div className="relative">
                <input
                  id="terms-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Eligibility, Media, IP..."
                  className="w-full px-3.5 py-2.5 bg-[#FDF9EB] rounded-xl border-[2px] border-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0054D9]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs text-gray-500 font-bold hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Quick Navigation / Table of Contents */}
            <nav
              aria-label="Terms and Conditions Table of Contents"
              className="bg-white rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] p-4 max-h-[70vh] overflow-y-auto"
            >
              <h3 className="font-anton text-lg uppercase tracking-wide text-black mb-3 px-1 flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="font-jetbrains text-xs font-bold text-[#0054D9]">
                  {filteredSections.length} / 22
                </span>
              </h3>

              <div className="space-y-1.5">
                {filteredSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                        isActive
                          ? "bg-[#FFD200] text-black border-black shadow-[2px_2px_0px_#000000] translate-x-1"
                          : "border-transparent text-[#374151] hover:bg-[#FDF9EB] hover:text-black"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span
                          className={`font-jetbrains text-[10px] px-1.5 py-0.5 rounded border border-black ${
                            isActive ? "bg-black text-white" : "bg-[#FDF9EB] text-black"
                          }`}
                        >
                          {sec.num.toString().padStart(2, "0")}
                        </span>
                        <span className="truncate">{sec.title}</span>
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive ? "text-black translate-x-0.5" : "text-gray-400 opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>
            </nav>
          </aside>

          {/* Right Main Content (All 22 Legal Sections) */}
          <div className="w-full lg:col-span-8 space-y-6">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-2xl border-[2.5px] border-black p-8 text-center shadow-[4px_4px_0px_#000000]">
                <p className="font-anton text-2xl uppercase text-black mb-2">No matching sections</p>
                <p className="text-sm text-[#4B5563] mb-4">
                  No terms matched &ldquo;{searchQuery}&rdquo;. Try another search keyword.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-[#FFD200] text-black font-bold text-xs uppercase rounded-xl border-[2px] border-black shadow-[2px_2px_0px_#000000] cursor-pointer"
                >
                  Clear Filter
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-24 bg-white rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] p-5 sm:p-7 md:p-8 transition-all hover:shadow-[6px_6px_0px_#000000]"
                >
                  {/* Section Top Header */}
                  <div className="flex items-start justify-between gap-3 pb-4 mb-5 border-b-[2px] border-black/10">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-[2px] border-black flex items-center justify-center font-anton text-lg sm:text-xl text-black shadow-[2px_2px_0px_#000000] shrink-0"
                        style={{ backgroundColor: sec.badgeBg }}
                      >
                        {sec.num.toString().padStart(2, "0")}
                      </div>
                      <div>
                        <span className="font-jetbrains text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0054D9] block">
                          {sec.tag}
                        </span>
                        <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-black">
                          {sec.num}. {sec.title}
                        </h2>
                      </div>
                    </div>

                    {/* Copy Link Button */}
                    <button
                      type="button"
                      onClick={() => handleCopyLink(sec.id)}
                      className="p-2 rounded-lg border-[1.5px] border-black bg-[#FDF9EB] hover:bg-[#FFD200] text-xs font-bold transition-all shadow-[1.5px_1.5px_0px_#000000] shrink-0 cursor-pointer"
                      title="Copy link to this section"
                      aria-label={`Copy link to section ${sec.num}`}
                    >
                      {copiedSection === sec.id ? (
                        <span className="text-[10px] font-jetbrains text-[#0054D9] font-bold">COPIED!</span>
                      ) : (
                        <span className="text-[10px] font-jetbrains text-black">#LINK</span>
                      )}
                    </button>
                  </div>

                  {/* Section Body */}
                  <div className="font-normal text-[#18181B]">{sec.content}</div>
                </article>
              ))
            )}

            {/* Closing Affirmation Card */}
            <div className="bg-[#FF0052] text-white rounded-2xl border-[3px] border-black shadow-[5px_5px_0px_#000000] p-6 sm:p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FFD200] text-black border-[2px] border-black flex items-center justify-center mx-auto shadow-[2px_2px_0px_#000000] text-xl">
                ✓
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-[#FFD200]">
                Acknowledgment and Consent
              </h3>
              <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed text-white/95">
                By using the Creatathon Website, registering for an event, submitting an application or participating in a Creatathon activity, you acknowledge that you have read and understood these Terms and agree to be bound by them.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD200] text-black font-anton text-lg uppercase rounded-xl border-[2px] border-black shadow-[3px_3px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Creatathon</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#FFD200] text-black rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer flex items-center gap-1.5 font-jetbrains text-xs font-bold uppercase"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline">Top</span>
        </button>
      )}

      {/* Branded Blue Legal Footer */}
      <SiteFooter />
    </div>
  );
}
