import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import styles from "./PrivacyPolicy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of YBVR Europe SL, effective November 17, 2026.",
};

type Block =
  | { type: "paragraph" | "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; rows: string[][] }
  | { type: "address"; lines: string[] };

type Section = { title: string; blocks: Block[] };

const introduction: Block[] = [
  {
    "type": "paragraph",
    "text": "The data holder for your personal data is YBVR Europe SL. We process your personal data to manage your requests, provide the requested services, send communications if you have given your consent, and comply with applicable legal obligations in Spain and the EU. You can exercise your rights of access, rectification, deletion, objection, restriction of processing, and data portability by writing to privacidad@ybvr.com or to YBVR Europe SL, C/ Nicaragua, 14, Semi-sotano, 28016 Madrid, Spain, indicating the right you wish to exercise and providing proof of your identity. You also have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos, www.aepd.es). Data will be retained for the time necessary to fulfill the purpose for which it was collected and for the legally required periods."
  },
  {
    "type": "paragraph",
    "text": "Effective date: November 17, 2026"
  },
  {
    "type": "paragraph",
    "text": "YBVR Europe SL"
  }
];

const sections: Section[] = [
  {
    "title": "1. Changes to this Privacy Policy",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We may revise this Privacy Policy from time to time. The most current version of the Privacy Policy will govern our use of information about you and will be located at www.ybvr.com/privacy-policy. If we make material changes to this Privacy Policy, we may notify you by email or by posting a notice on the Services and sending an e-mail to the e-mail address YBVR has on file for you. Please ensure this e-mail address remains current so you will receive updates. You should return to this page periodically to familiarize yourself with the current version of this Privacy Policy."
      }
    ]
  },
  {
    "title": "2. Information We Collect About You",
    "blocks": [
      {
        "type": "heading",
        "text": "Information We Collect Directly From You."
      },
      {
        "type": "paragraph",
        "text": "You may browse certain areas of the Site and a subset of our services without registering with us or providing us personal information. We may collect personal information that you provide to us in connection with your use of the Services when you: (a) register as a user of the Services; (b) make changes to your user profile information; (c) send email messages, forms, or other information through the Services; (d) download the applications; (e) interact with the Services; (f) buy a one-time purchase or a subscription, or redeem an access code. If you register for a YBVR account, you will be required to provide your first and last name and email address and will be prompted to create a password. You may also choose to provide additional information in connection with your YBVR account."
      },
      {
        "type": "paragraph",
        "text": "Purchase information. When you buy a one-time purchase or a subscription, we collect and keep the details of your order (what you bought, the price, the date and the order number), the status and history of your subscriptions, your country, and a record of the consents you give at checkout (your account, the order, the date and time, and the version of the Purchase Terms you accepted). Payment is taken by Cleeng B.V. (“Cleeng”), which handles subscriptions, payment and billing on our behalf as Merchant of Record. Cleeng and its payment service providers collect your payment card and billing details directly. We do not receive or store your full payment card details; we receive only limited payment information, such as the card brand and its last four digits, to show it on your receipt and in your account."
      },
      {
        "type": "heading",
        "text": "Information We Collect Automatically."
      },
      {
        "type": "paragraph",
        "text": "YBVR may automatically collect the following information about your use of our Site or Services through cookies and other technologies, technical information about your device(s), browser type and version, computer and connection information, statistics on page views, traffic to and from the Services, ad data, Wi-Fi connection information, IP address, device ID, and standard web log information. We use IP address to track the geographical location of the user to determine if certain content is available to be accessed in that geographical location (if content is not available we typically send a message to the user indicating content is not available). We also collect click actions within the applications for error reporting and tracking user behavior. We also collect data regarding how long users watch a specific piece of content, what content users are watching, how many pieces of content a user is watching, from where the users are accessing our content, as well as telemetry regarding the technical performance of the services. We may combine this information with other information that we have collected about you, including, where applicable, your username, name, and other personal information, including but not limited to username and password used for third party authentication within the YBVR platform. Please see the section “Cookies and Web Beacons” below for more information."
      }
    ]
  },
  {
    "title": "3. Cookies and Web Beacons",
    "blocks": [
      {
        "type": "paragraph",
        "text": "YBVR, along with our third-party service providers, vendors and business partners may use cookies, locally stored objects, pixel tags, and web beacons to automatically collect information about your use of the Services. Cookies are small bits of information that are transferred to and stored in separate files within your computer’s browser. The Services use both “persistent cookies” which remain on your computer after you have closed your browser as well as “session cookies” which exist only during a visitor’s online session and disappear from your computer when you close your browser. Locally stored objects or “flash cookies” are data files that can be created on your computer by the websites you visit and are a way for websites to store information for later use. Locally stored objects are different than cookies because they are stored in different parts of your computer than cookies. Web beacons are small strings of code that provide a method for delivering a graphic image on a web page or in an email message for the purpose of transferring data. You can set your browser to reject or disable cookies or to notify you when you are sent a cookie. However, if you reject or disable cookies, you may not be able to use all portions or all functionality of the Services."
      }
    ]
  },
  {
    "title": "4. Third Party Analytics",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We use automated devices and applications, such as Google Analytics, to evaluate usage of our Site and our Services. We also may use other analytic means to evaluate our Services. We use these tools to help us improve our Services, performance and user experiences. These entities may use cookies and other tracking technologies to perform their services. We do not share your personal information with these third parties."
      }
    ]
  },
  {
    "title": "5. User Generated Content",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We may invite you to post content on or through public areas of our Site or Services, including your comments, photos, videos, pictures, and any other information that you would like to be available on our Site or Services. Please note, however, that if you post such content to public areas of our Site or Services, all of the information or content that you post may be available to other visitors or users of our Site or Services. Your posting and content may become public and we cannot prevent such information from being used in a manner that may violate this Privacy Policy, the law, or your personal privacy."
      }
    ]
  },
  {
    "title": "6. How YBVR Uses Your Personally Identifiable Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "YBVR may use information that YBVR collects about you to:"
      },
      {
        "type": "list",
        "items": [
          "Provide access to the Services and to provide you with requested services and customer support and to process and respond to your inquiries;",
          "Process and manage your purchases and subscriptions, including order confirmations, renewal notices, cancellations, refunds and complaints, and keep a record of the consents you give at checkout;",
          "Personalize, customize, measure, and improve our services, content, and advertising and otherwise to enhance your experience of the Services;",
          "Prevent, detect, and investigate potentially prohibited or illegal activities or enforce the applicable agreement(s) between you and YBVR;",
          "Analyze the accuracy, effectiveness, usability, or popularity of the Services;",
          "Generate and review reports and data about our user base and service usage patterns;",
          "Compile aggregate data for internal and external business purposes;",
          "Resolve disputes and troubleshoot problems;",
          "Contact you with information, including promotional, marketing, and advertising information and recommendations that we believe may be of interest to you;",
          "Provide you with other services requested by you as described when we collect the information; and",
          "Take any other action as otherwise stated in this Privacy Policy or an agreement between you and YBVR."
        ]
      },
      {
        "type": "paragraph",
        "text": "Legal bases. If you are in the European Economic Area, we process your personal information on the following legal bases: the performance of our contract with you (your account, the Services, and your purchases and subscriptions); compliance with our legal obligations (such as tax, accounting and consumer law); your consent (such as marketing communications and non-essential cookies), which you can withdraw at any time; and our legitimate interests (such as keeping the Services secure, preventing fraud and improving the Services)."
      }
    ]
  },
  {
    "title": "7. Categories of Third-Party Persons or Entities With Whom YBVR May Share Your Personally Identifiable Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We may disclose the information we collect from you to the following third parties:"
      },
      {
        "type": "paragraph",
        "text": "Service Providers. We may share your information with third-party contractors, agents, collaborators, business partners or service providers who provide certain services to us or on our behalf, such as operating and supporting the Services or providing marketing and promotional services."
      },
      {
        "type": "paragraph",
        "text": "Payment and Subscription Provider. To take and manage your payments, we share the necessary information (your account identifier, email, country and order details) with Cleeng. As Merchant of Record, Cleeng processes your payment and billing data as an independent controller, together with its payment service providers, under its own privacy policy (https://cleeng.com/privacy-policy). Cleeng shares with us the information about your purchases and subscriptions that we need to give you access to the content."
      },
      {
        "type": "paragraph",
        "text": "Business Partners. We may share your information with our third-party business partners, such as content providers, who may provide YBVR or you with certain marketing and promotions that they or we believe may be of interest to you; provided, however, that we will only share your information with such third-party business partners after you opt-in to this sharing activity."
      },
      {
        "type": "paragraph",
        "text": "Aggregate Information. YBVR may share information relating to visitors and users of the Services with affiliated or unaffiliated third parties, including our media partners, on an aggregate basis. We note that, while this information will not identify you personally, in some instances these third parties may be able to combine this information with other data they have about you, or that they receive from third parties, in a manner that allows them to identify you personally."
      },
      {
        "type": "paragraph",
        "text": "Affiliates. We may share some or all of your information with our parent company, subsidiaries, corporate affiliates, joint ventures or other companies under common control with us."
      },
      {
        "type": "paragraph",
        "text": "Legal Requirements. To the extent permitted by law, we may share your information with law enforcement, governmental agencies, or authorized third parties, in response to a request relating to a criminal investigation or alleged illegal activity or any other activity that may expose us, you, or any other YBVR user to legal liability, or to protect our rights or property, or during emergencies when safety is at risk. We may also share your information in response to court orders, subpoenas, or other legal or regulatory requests, and we may provide access to your information to our legal counsel and other consultants in connection with actual or potential litigation."
      },
      {
        "type": "paragraph",
        "text": "Companies That Acquire Our Business or Assets. If YBVR becomes involved in a merger, acquisition, sale of assets, securities offering, bankruptcy, reorganization, dissolution, or any other transaction or if the ownership of all or substantially all of our business otherwise changes, YBVR may share or transfer your information to a third party or parties in connection with the applicable transaction."
      },
      {
        "type": "paragraph",
        "text": "Unforeseeable or Unpreventable Disclosures. Your information may be disclosed to third parties in unforeseeable situations or situations that are not preventable even when commercially reasonable protections are employed, such as in the case that YBVR or the Services is subject to a hacking or other attack."
      }
    ]
  },
  {
    "title": "8. Do Not Track",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You may be able to adjust your browser settings or other settings so that “do not track” requests are sent to the Services. YBVR will not disable tracking technology that may be active on the Services in response to any “do not track” requests that are sent to the Services."
      }
    ]
  },
  {
    "title": "9. Personally Identifiable Information About Your Online Activities Over Time and Across Different Websites",
    "blocks": [
      {
        "type": "paragraph",
        "text": "YBVR does not permit third parties to collect personally identifiable information about your online activities over time and across different websites when you use the Services."
      }
    ]
  },
  {
    "title": "10. Spam, Spyware or Spoofing",
    "blocks": [
      {
        "type": "paragraph",
        "text": "YBVR and our users do not tolerate spam. To report YBVR related spam or spoof emails to us, please forward the email to info@ybvr.com."
      }
    ]
  },
  {
    "title": "11. Accessing, Changing and Managing Your Personal Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You may change and update the information you provide through the Services, or change your preferences connecting how we use your information as follows:"
      },
      {
        "type": "paragraph",
        "text": "Changing or Updating Your Information. You may make changes to the user information you have provided in connection with your YBVR account by contacting us at info@ybvr.com. Following receipt of a request from you, we will take reasonable steps to update, correct, or delete your information from the publicly accessible portions of the Services."
      },
      {
        "type": "paragraph",
        "text": "Email Communication . You can make changes regarding receiving email communications from us within your YBVR account. You can also choose not to receive email communications from us by following the “unsubscribe” instructions in any email communication you receive from us."
      }
    ]
  },
  {
    "title": "12. Third Parties",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Services may contain links to websites that are not owned or operated by YBVR. Please be aware that we are not responsible for the privacy practices of these websites. If you visit these websites or provide any information directly to parties other than YBVR (even if those websites display the YBVR brand), different policies may apply to the collection and use of your information. We encourage you to investigate and ask questions before accessing third-party websites or disclosing information to third parties."
      }
    ]
  },
  {
    "title": "13. Security",
    "blocks": [
      {
        "type": "paragraph",
        "text": "YBVR takes reasonable measures to protect the information you provide to YBVR or submit through the Services against loss, theft, unauthorized use, disclosure, or modification. However, we cannot guarantee or warrant the security of any information you transmit to YBVR or submit through the Services and you do so at your own risk. No internet or email transmission is ever fully secure or error-free. Emails sent to or through the Services may not be secure. You should use caution whenever submitting information online and take special care in deciding what information you send to us via email. We take steps to protect your information from unauthorized access and follow industry standards on information security management to protect sensitive information."
      }
    ]
  },
  {
    "title": "14. International Transfers",
    "blocks": [
      {
        "type": "paragraph",
        "text": "YBVR Europe SL is the controller of your personal data. Some of our group companies and service providers, including our affiliate Yerba Buena VR, Inc., are located in the United States or in other countries outside the European Economic Area, so your information may be transferred to, processed and stored in those countries. The privacy laws of those countries may not be as protective as those in your jurisdiction. Where we transfer personal data outside the European Economic Area, we do so on the basis of the standard contractual clauses approved by the European Commission. You can ask us for more information about these safeguards at privacidad@ybvr.com."
      }
    ]
  },
  {
    "title": "15. CCPA",
    "blocks": [
      {
        "type": "paragraph",
        "text": "This section for current California residents supplements the information contained in this Privacy Policy and applies solely to visitors, users and others who reside in the State of California (“Residents”). YBVR’s Privacy Policy complies with the California Consumer Privacy Act of 2018 (“CCPA”) and other California Privacy laws."
      },
      {
        "type": "heading",
        "text": "Information We Collect"
      },
      {
        "type": "paragraph",
        "text": "YBVR collects information identified in this Privacy Policy. In particular, YBVR has collected the following categories of personal information from users within the last twelve (12) months."
      },
      {
        "type": "table",
        "rows": [
          [
            "Category",
            "Collected?"
          ],
          [
            "Identifiers",
            "Yes"
          ],
          [
            "User IP and data that flows from that",
            "Yes"
          ],
          [
            "Operating System",
            "Yes"
          ],
          [
            "Meta User ID",
            "Yes"
          ],
          [
            "In app purchases",
            "Yes"
          ],
          [
            "Physical movements",
            "Yes"
          ],
          [
            "User and device sharing",
            "Yes"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "YBVR may use or disclose the information we collect for business purposes."
      },
      {
        "type": "paragraph",
        "text": "We will not collect additional categories of information or use the personal information we collected from you for materially different, unrelated or incompatible purposes without providing you notice."
      },
      {
        "type": "paragraph",
        "text": "YBVR cannot guarantee that the personal data will not be used in any other way with a third party"
      },
      {
        "type": "heading",
        "text": "Sharing Personal Information"
      },
      {
        "type": "paragraph",
        "text": "YBVR may disclose your information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use if for any purpose except for performing the contract."
      },
      {
        "type": "paragraph",
        "text": "In the preceding twelve (12) months, we have disclosed the following categories of personal information for business purposes:"
      },
      {
        "type": "list",
        "items": [
          "Identifiers",
          "User IP and data that flows from that",
          "Operating System",
          "Meta User ID",
          "In app purchases",
          "Physical movements",
          "User and device sharing"
        ]
      },
      {
        "type": "paragraph",
        "text": "We disclose your personal information for a business purpose to the following categories of third parties:"
      },
      {
        "type": "list",
        "items": [
          "Our affiliates and partners",
          "Service providers",
          "Third parties to whom you or your agents authorize us to disclose your information in connection with products or services we provide to you"
        ]
      },
      {
        "type": "paragraph",
        "text": "In the preceding twelve months, we have not sold any personal information."
      },
      {
        "type": "heading",
        "text": "Access to Specific Information and Data Portability Rights"
      },
      {
        "type": "paragraph",
        "text": "You have the right to request that YBVR discloses certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, YBVR will disclose to you:"
      },
      {
        "type": "list",
        "items": [
          "The categories of personal information we collected about you.",
          "The categories of sources for the personal information we collected about you.",
          "Our business or commercial purpose for collecting or selling that personal information.",
          "The categories of third parties with whom we share that personal information.",
          "The specific pieces of personal information we collected about you (also called a data portability request)."
        ]
      },
      {
        "type": "paragraph",
        "text": "If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:"
      },
      {
        "type": "list",
        "items": [
          "sales, identifying the personal information categories that each category of recipient purchased; and",
          "disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained."
        ]
      },
      {
        "type": "paragraph",
        "text": "YBVR may deny your deletion request if retaining the information is necessary for us or our service providers to:"
      },
      {
        "type": "list",
        "items": [
          "Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.",
          "Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.",
          "Debug products to identify and repair errors that impair existing intended functionality.",
          "Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.",
          "Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 seq.).",
          "Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement, if you previously provided informed consent.",
          "Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.",
          "Comply with a legal obligation.",
          "Make other internal and lawful uses of that information that are compatible with the context in which you provided it."
        ]
      },
      {
        "type": "heading",
        "text": "Exercising Access, Data Portability, and Deletion Rights"
      },
      {
        "type": "paragraph",
        "text": "To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by either:"
      },
      {
        "type": "paragraph",
        "text": "Email: legal@ybvr.com"
      },
      {
        "type": "paragraph",
        "text": "Only you or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child."
      },
      {
        "type": "paragraph",
        "text": "You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:"
      },
      {
        "type": "list",
        "items": [
          "Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.",
          "Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it."
        ]
      },
      {
        "type": "paragraph",
        "text": "We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you. Making a verifiable consumer request does not require you to create an account with us. We will only use personal information provided in a verifiable consumer request to verify the requestor’s identity or authority to make the request."
      },
      {
        "type": "heading",
        "text": "Response Timing and Format"
      },
      {
        "type": "paragraph",
        "text": "YBVR aims to respond to a verifiable consumer request within 45 days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing. If you have an account with us, we will deliver our written response to that account. Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request’s receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance."
      },
      {
        "type": "paragraph",
        "text": "We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request."
      },
      {
        "type": "heading",
        "text": "Non-discrimination"
      },
      {
        "type": "paragraph",
        "text": "YBVR will not discriminate against you for exercising any of your CCPA rights."
      }
    ]
  },
  {
    "title": "16. No Use by Children",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Services are not intended for use by children under the age of 13. We will never knowingly collect information directly from children under the age of 13 without verifiable parental consent. If you live in Spain, you must be at least 14 to give your consent to the processing of your personal data; in other countries of the European Economic Area the minimum age is between 13 and 16. Below that age, we need the consent of your parent or legal guardian. Purchases and subscriptions may be made only by adults, or by minors with the authorization of a parent or legal guardian. If you are under the age of 13, you may not use the Services and please do not provide us with information of any kind whatsoever. If we become aware that a user is under the age of 13 and has submitted information to the Services without verifiable parental consent, we will remove his or her information from our files and deactivate his or her account. We encourage parents and guardians to spend time with their children online and to be familiar with the websites they visit. If you have reason to believe that we may have accidentally received personal information from a child under the age of 13, please contact us immediately at info@ybvr.com."
      }
    ]
  },
  {
    "title": "17. Retention of Your Information",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We retain information for active YBVR accounts as long as it is necessary and relevant for our operations. In addition, we may retain information from closed accounts to comply with the law, prevent fraud, resolve disputes, troubleshoot problems, assist with any investigation, enforce the terms of any agreement between you and YBVR and take other actions permitted by law or disclosed in this Privacy Policy. Information about your purchases and subscriptions, including the record of your consents, is kept while the purchase or subscription is active and afterwards for the periods required by tax, accounting and consumer law generally six years."
      }
    ]
  },
  {
    "title": "18. How to Contact Us",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You may contact us at privacidad@ybvr.com if you have any questions about the Privacy Policy"
      }
    ]
  },
  {
    "title": "Your California Privacy Rights",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Section 1798.83 of the California Civil Code permits California residents to request from a business, with whom the California resident has an established business relationship, information related to the personal information disclosed by YBVR to third parties for direct marketing purposes and the names and addresses of the third parties with whom the business has shared such information during the immediately preceding calendar year. You may make one request each year by emailing YBVR at info@ybvr.com or sending a letter to:"
      },
      {
        "type": "address",
        "lines": [
          "YBVR,Inc.",
          "51 E Campbell Ave - 107-ACE",
          "Campbell, CA 95008",
          "Attention: Privacy Policy"
        ]
      },
      {
        "type": "paragraph",
        "text": "Effective Date: November 17, 2026"
      }
    ]
  }
];

// Preserve the source wording while making contact and policy links clickable.
const linkPattern = /(privacidad@ybvr\.com|info@ybvr\.com|legal@ybvr\.com|https:\/\/cleeng\.com\/privacy-policy|www\.ybvr\.com\/privacy-policy|www\.aepd\.es)/g;

function LinkedText({ text }: { text: string }) {
  return <>{text.split(linkPattern).map((part, index) => {
    const isEmail = /^(privacidad|info|legal)@ybvr\.com$/.test(part);
    const isWebsite = /^(https:\/\/|www\.)/.test(part);
    if (isEmail || isWebsite) {
      const href = isEmail ? `mailto:${part}` : part.startsWith("www.") ? `https://${part}` : part;
      return <a key={index} href={href}>{part}</a>;
    }
    return part;
  })}</>;
}

function ContentBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return <h3 className={styles.subheading}>{block.text}</h3>;
    case "paragraph":
      return <p><LinkedText text={block.text} /></p>;
    case "list":
      return (
        <ul className={styles.list}>
          {block.items.map((item, index) => <li key={index}><LinkedText text={item} /></li>)}
        </ul>
      );
    case "table": {
      const [header, ...rows] = block.rows;
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table} aria-label="Categories of personal information collected">
            <thead><tr>{header.map((cell, index) => <th key={index} scope="col">{cell}</th>)}</tr></thead>
            <tbody>{rows.map((row, index) => (
              <tr key={index}>
                <th scope="row">{row[0]}</th>
                <td>{row[1]}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      );
    }
    case "address":
      return <address className={styles.address}>{block.lines.map((line, index) => <div key={index}>{line}</div>)}</address>;
  }
}

function sectionId(index: number) {
  return index === 18 ? "california-privacy-rights" : `section-${index + 1}`;
}

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="privacy-title">
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Legal</span>
            <h1 id="privacy-title">Privacy Policy.</h1>
          </div>
        </Container>
      </section>
      <section className={styles.content}>
        <Container>
          <article className={styles.document}>
            <div className={styles.introduction}>
              {introduction.map((block, index) => <ContentBlock key={index} block={block} />)}
            </div>
            {sections.map((section, index) => (
              <section key={section.title} className={styles.section} aria-labelledby={sectionId(index)}>
                <h2 id={sectionId(index)}>{section.title}</h2>
                {section.blocks.map((block, blockIndex) => <ContentBlock key={blockIndex} block={block} />)}
              </section>
            ))}
          </article>
        </Container>
      </section>
    </main>
  );
}
