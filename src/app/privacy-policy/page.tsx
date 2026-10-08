import type { Metadata } from "next";
import styles from "./PrivacyPolicy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | YB",
  description: "Read how YBVR handles personal information, cookies, data protection and privacy rights.",
};

const navigation = [
  { id: "section-01", label: "Changes to this Policy" },
  { id: "section-02", label: "Information We Collect" },
  { id: "section-03", label: "Cookies & Web Beacons" },
  { id: "section-04", label: "Third-Party Analytics" },
  { id: "section-05", label: "User-Generated Content" },
  { id: "section-06", label: "How We Use Information" },
  { id: "section-07", label: "Sharing Information" },
  { id: "section-08", label: "Do Not Track" },
  { id: "section-09", label: "Online Activity" },
  { id: "section-10", label: "Spam & Spoofing" },
  { id: "section-11", label: "Managing Your Information" },
  { id: "section-12", label: "Third Parties" },
  { id: "section-13", label: "Security" },
  { id: "section-14", label: "United States Operation" },
  { id: "section-15", label: "California (CCPA)" },
  { id: "section-16", label: "Children" },
  { id: "section-17", label: "Data Retention" },
  { id: "section-18", label: "Contact" },
 ] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page} id="top">
      <div className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>YB / LEGAL</p>
          <h1 className={styles.pageTitle}>Privacy <span>Policy.</span></h1>
          <p className={styles.introduction}>The data holder for your personal data is YBVR Europe SL. We process your personal data to manage your requests, provide the requested services, send communications if you have given your consent, and comply with applicable legal obligations in Spain and the EU. You can exercise your rights of access, rectification, deletion, objection, restriction of processing, and data portability by writing to <a href="mailto:privacidad@ybvr.com">privacidad@ybvr.com</a> or to YBVR Europe SL, C/Nicaragua, 14- 28016 Madrid, Spain, indicating the right you wish to exercise and providing proof of your identity. Data will be retained for the time necessary to fulfill the purpose for which it was collected and for the legally required periods.</p>
          <div className={styles.heroMeta}>
            <span>Effective date: July 2026</span>
            <span>YBVR Europe SL</span>
          </div>
        </div>
      </div>

      <div className={`${styles.shell} ${styles.documentLayout}`}>
        <aside className={styles.sidebar} aria-label="Privacy policy navigation">
          <p className={styles.sidebarTitle}>ON THIS PAGE</p>
          <nav className={styles.toc}>
            {navigation.map((item, index) => (
              <a key={item.id} href={`#${item.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.article}>

          <section className={styles.policySection} id="section-01" aria-labelledby="heading-01">
            <p className={styles.sectionIndex}>SECTION 01 / 18</p>
            <h2 id="heading-01">Changes to this Privacy Policy</h2>
            <p>We may revise this Privacy Policy from time to time. The most current version of the Privacy Policy will govern our use of information about you and will be located at www.ybvr.com/privacy-policy. If we make material changes to this Privacy Policy, we may notify you by email or by posting a notice on the Services and sending an e-mail to the e-mail address YBVR has on file for you. Please ensure this e-mail address remains current so you will receive updates. You should return to this page periodically to familiarize yourself with the current version of this Privacy Policy.</p>
          </section>

          <section className={styles.policySection} id="section-02" aria-labelledby="heading-02">
            <p className={styles.sectionIndex}>SECTION 02 / 18</p>
            <h2 id="heading-02">Information We Collect About You</h2>
            <h3>Information We Collect Directly From You.</h3>
            <p>You may browse certain areas of the Site and a subset of our services without registering with us or providing us personal information. We may collect personal information that you provide to us in connection with your use of the Services when you: (a) register as a user of the Services; (b) make changes to your user profile information; (c) send email messages, forms, or other information through the Services; (d) download the applications; (e) interact with the Services.  If you register for a YBVR account, you will be required to provide your first and last name and email address and will be prompted to create a password. You may also choose to provide additional information in connection with your YBVR account.</p>
            <h3>Information We Collect Automatically.</h3>
            <p>YBVR may automatically collect the following information about your use of our Site or Services through cookies and other technologies, technical information about your device(s), browser type and version, computer and connection information, statistics on page views, traffic to and from the Services, ad data, Wi-Fi connection information, IP address, device ID, and standard web log information. We use IP address to track the geographical location of the user to determine if certain content is available to be accessed in that geographical location (if content is not available we typically send a message to the user indicating content is not available). We also collect click actions within the applications for error reporting and tracking user behavior. We also collect data regarding how long users watch a specific piece of content, what content users are watching, how many pieces of content a user is watching, from where the users are accessing our content, as well as telemetry regarding the technical performance of the services. We may combine this information with other information that we have collected about you, including, where applicable, your username, name, and other personal information, including but not limited to username and password used for third party authentication within the YBVR platform. Please see the section “Cookies and Web Beacons” below for more information.</p>
          </section>

          <section className={styles.policySection} id="section-03" aria-labelledby="heading-03">
            <p className={styles.sectionIndex}>SECTION 03 / 18</p>
            <h2 id="heading-03">Cookies and Web Beacons</h2>
            <p>YBVR, along with our third-party service providers, vendors and business partners may use cookies, locally stored objects, pixel tags, and web beacons to automatically collect information about your use of the Services. Cookies are small bits of information that are transferred to and stored in separate files within your computer’s browser. The Services use both “persistent cookies” which remain on your computer after you have closed your browser as well as “session cookies” which exist only during a visitor’s online session and disappear from your computer when you close your browser. Locally stored objects or “flash cookies” are data files that can be created on your computer by the websites you visit and are a way for websites to store information for later use. Locally stored objects are different than cookies because they are stored in different parts of your computer than cookies. Web beacons are small strings of code that provide a method for delivering a graphic image on a web page or in an email message for the purpose of transferring data. You can set your browser to reject or disable cookies or to notify you when you are sent a cookie. However, if you reject or disable cookies, you may not be able to use all portions or all functionality of the Services.</p>
          </section>

          <section className={styles.policySection} id="section-04" aria-labelledby="heading-04">
            <p className={styles.sectionIndex}>SECTION 04 / 18</p>
            <h2 id="heading-04">Third Party Analytics</h2>
            <p>We use automated devices and applications, such as Google Analytics, to evaluate usage of our Site and our Services. We also may use other analytic means to evaluate our Services. We use these tools to help us improve our Services, performance and user experiences. These entities may use cookies and other tracking technologies to perform their services. We do not share your personal information with these third parties.</p>
          </section>

          <section className={styles.policySection} id="section-05" aria-labelledby="heading-05">
            <p className={styles.sectionIndex}>SECTION 05 / 18</p>
            <h2 id="heading-05">User Generated Content</h2>
            <p>We may invite you to post content on or through public areas of our Site or Services, including your comments, photos, videos, pictures, and any other information that you would like to be available on our Site or Services. Please note, however, that if you post such content to public areas of our Site or Services, all of the information or content that you post may be available to other visitors or users of our Site or Services. Your posting and content may become public and we cannot prevent such information from being used in a manner that may violate this Privacy Policy, the law, or your personal privacy.</p>
          </section>

          <section className={styles.policySection} id="section-06" aria-labelledby="heading-06">
            <p className={styles.sectionIndex}>SECTION 06 / 18</p>
            <h2 id="heading-06">How YBVR Uses Your Personally Identifiable Information</h2>
            <p>YBVR may use information that YBVR collects about you to:</p>
            <ul>
              <li>Provide access to the Services and to provide you with requested services and customer support and to process and respond to your inquiries;</li>
              <li>Personalize, customize, measure, and improve our services, content, and advertising and otherwise to enhance your experience of the Services;</li>
              <li>Prevent, detect, and investigate potentially prohibited or illegal activities or enforce the applicable agreement(s) between you and YBVR;</li>
              <li>Analyze the accuracy, effectiveness, usability, or popularity of the Services;</li>
              <li>Generate and review reports and data about our user base and service usage patterns;</li>
              <li>Compile aggregate data for internal and external business purposes;</li>
              <li>Resolve disputes and troubleshoot problems;</li>
              <li>Contact you with information, including promotional, marketing, and advertising information and recommendations that we believe may be of interest to you;</li>
              <li>Provide you with other services requested by you as described when we collect the information; and</li>
              <li>Take any other action as otherwise stated in this Privacy Policy or an agreement between you and YBVR.</li>
            </ul>
          </section>

          <section className={styles.policySection} id="section-07" aria-labelledby="heading-07">
            <p className={styles.sectionIndex}>SECTION 07 / 18</p>
            <h2 id="heading-07">Categories of Third-Party Persons or Entities With Whom YBVR May Share Your Personally Identifiable Information</h2>
            <p>We may disclose the information we collect from you to the following third parties:</p>
            <p><strong>Service Providers.</strong> We may share your information with third-party contractors, agents, collaborators, business partners or service providers who provide certain services to us or on our behalf, such as operating and supporting the Services or providing marketing and promotional services.</p>
            <p><strong>Business Partners.</strong> We may share your information with our third-party business partners, such as content providers, who may provide YBVR or you with certain marketing and promotions that they or we believe may be of interest to you; provided, however, that we will only share your information with such third-party business partners after you opt-in to this sharing activity.</p>
            <p><strong>Aggregate Information.</strong> YBVR may share information relating to visitors and users of the Services with affiliated or unaffiliated third parties, including our media partners, on an aggregate basis. We note that, while this information will not identify you personally, in some instances these third parties may be able to combine this information with other data they have about you, or that they receive from third parties, in a manner that allows them to identify you personally.</p>
            <p><strong>Affiliates</strong>. We may share some or all of your information with our parent company, subsidiaries, corporate affiliates, joint ventures or other companies under common control with us.</p>
            <p><strong>Legal Requirements</strong>. To the extent permitted by law, we may share your information with law enforcement, governmental agencies, or authorized third parties, in response to a request relating to a criminal investigation or alleged illegal activity or any other activity that may expose us, you, or any other YBVR user to legal liability, or to protect our rights or property, or during emergencies when safety is at risk. We may also share your information in response to court orders, subpoenas, or other legal or regulatory requests, and we may provide access to your information to our legal counsel and other consultants in connection with actual or potential litigation.</p>
            <p><strong>Companies That Acquire Our Business or Assets</strong>. If YBVR becomes involved in a merger, acquisition, sale of assets, securities offering, bankruptcy, reorganization, dissolution, or any other transaction or if the ownership of all or substantially all of our business otherwise changes, YBVR may share or transfer your information to a third party or parties in connection with the applicable transaction.</p>
            <p><strong>Unforeseeable or Unpreventable Disclosures.</strong> Your information may be disclosed to third parties in unforeseeable situations or situations that are not preventable even when commercially reasonable protections are employed, such as in the case that YBVR or the Services is subject to a hacking or other attack.</p>
          </section>

          <section className={styles.policySection} id="section-08" aria-labelledby="heading-08">
            <p className={styles.sectionIndex}>SECTION 08 / 18</p>
            <h2 id="heading-08">Do Not Track</h2>
            <p>You may be able to adjust your browser settings or other settings so that “do not track” requests are sent to the Services. YBVR will not disable tracking technology that may be active on the Services in response to any “do not track” requests that are sent to the Services.</p>
          </section>

          <section className={styles.policySection} id="section-09" aria-labelledby="heading-09">
            <p className={styles.sectionIndex}>SECTION 09 / 18</p>
            <h2 id="heading-09">Personally Identifiable Information About Your Online Activities Over Time and Across Different Websites</h2>
            <p>YBVR does not permit third parties to collect personally identifiable information about your online activities over time and across different websites when you use the Services.</p>
          </section>

          <section className={styles.policySection} id="section-10" aria-labelledby="heading-10">
            <p className={styles.sectionIndex}>SECTION 10 / 18</p>
            <h2 id="heading-10">Spam, Spyware or Spoofing</h2>
            <p>YBVR and our users do not tolerate spam. To report YBVR related spam or spoof emails to us, please forward the email to <a href="mailto:info@ybvr.com">info@ybvr.com</a>.</p>
          </section>

          <section className={styles.policySection} id="section-11" aria-labelledby="heading-11">
            <p className={styles.sectionIndex}>SECTION 11 / 18</p>
            <h2 id="heading-11">Accessing, Changing and Managing Your Personal Information</h2>
            <p>You may change and update the information you provide through the Services, or change your preferences connecting how we use your information as follows:</p>
            <p><strong>Changing or Updating Your Information.</strong> You may make changes to the user information you have provided in connection with your YBVR account by contacting us at <a href="mailto:info@ybvr.com">info@ybvr.com</a>. Following receipt of a request from you, we will take reasonable steps to update, correct, or delete your information from the publicly accessible portions of the Services.</p>
            <p><strong>Email Communication .</strong> You can make changes regarding receiving email communications from us within your YBVR account. You can also choose not to receive email communications from us by following the “unsubscribe” instructions in any email communication you receive from us.</p>
          </section>

          <section className={styles.policySection} id="section-12" aria-labelledby="heading-12">
            <p className={styles.sectionIndex}>SECTION 12 / 18</p>
            <h2 id="heading-12">Third Parties</h2>
            <p>The Services may contain links to websites that are not owned or operated by YBVR. Please be aware that we are not responsible for the privacy practices of these websites. If you visit these websites or provide any information directly to parties other than YBVR (even if those websites display the YBVR brand), different policies may apply to the collection and use of your information. We encourage you to investigate and ask questions before accessing third-party websites or disclosing information to third parties.</p>
          </section>

          <section className={styles.policySection} id="section-13" aria-labelledby="heading-13">
            <p className={styles.sectionIndex}>SECTION 13 / 18</p>
            <h2 id="heading-13">Security</h2>
            <p>YBVR takes reasonable measures to protect the information you provide to YBVR or submit through the Services against loss, theft, unauthorized use, disclosure, or modification. However, we cannot guarantee or warrant the security of any information you transmit to YBVR or submit through the Services and you do so at your own risk. No internet or email transmission is ever fully secure or error-free. Emails sent to or through the Services may not be secure. You should use caution whenever submitting information online and take special care in deciding what information you send to us via email.  We take steps to protect your information from unauthorized access and follow industry standards on information security management to protect sensitive information.</p>
          </section>

          <section className={styles.policySection} id="section-14" aria-labelledby="heading-14">
            <p className={styles.sectionIndex}>SECTION 14 / 18</p>
            <h2 id="heading-14">United States Operation</h2>
            <p>The Services are operated from the United States. If you are located outside of the United States and choose to use the Services or provide your information to us, your information may be transferred, processed and stored in the United States and you hereby consent to the foregoing. The privacy laws of the United States may not be as protective as those in your jurisdiction. Your agreement to the terms of this Privacy Policy followed by your submission of information in connection with the Services represents your agreement to this practice.</p>
          </section>

          <section className={styles.policySection} id="section-15" aria-labelledby="heading-15">
            <p className={styles.sectionIndex}>SECTION 15 / 18</p>
            <h2 id="heading-15">CCPA</h2>
            <p>This section for current California residents supplements the information contained in this Privacy Policy and applies solely to visitors, users and others who reside in the State of California (“Residents”).  YBVR’s Privacy Policy complies with the California Consumer Privacy Act of 2018 (“CCPA”) and other California Privacy laws.</p>
            <h3>Information We Collect</h3>
            <p>YBVR collects information identified in this Privacy Policy.  In particular, YBVR has collected the following categories of personal information from users within the last twelve (12) months.</p>
            <div className={styles.tableScroll}>
              <table className={styles.dataTable}>
                <thead><tr><th scope="col">Category</th><th scope="col">Collected?</th></tr></thead>
                <tbody>
                  <tr><td>Identifiers</td><td>Yes</td></tr>
                  <tr><td>User IP and data that flows from that</td><td>Yes</td></tr>
                  <tr><td>Operating System</td><td>Yes</td></tr>
                  <tr><td>Meta User ID</td><td>Yes</td></tr>
                  <tr><td>In app purchases</td><td>Yes</td></tr>
                  <tr><td>Physical movements</td><td>Yes</td></tr>
                  <tr><td>User and device sharing</td><td>Yes</td></tr>
                </tbody>
              </table>
            </div>
            <p>YBVR may use or disclose the information we collect for business purposes.</p>
            <p>We will not collect additional categories of information or use the personal information we collected from you for materially different, unrelated or incompatible purposes without providing you notice.</p>
            <p>YBVR cannot guarantee that the personal data will not be used in any other way with a third party</p>
            <h3>Sharing Personal Information</h3>
            <p>YBVR may disclose your information to a third party for a business purpose.  When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use if for any purpose except for performing the contract.</p>
            <p>In the preceding twelve (12) months, we have disclosed the following categories of personal information for business purposes:</p>
            <ul>
              <li>Identifiers</li>
              <li>User IP and data that flows from that</li>
              <li>Operating System</li>
              <li>Meta User ID</li>
              <li>In app purchases</li>
              <li>Physical movements</li>
              <li>User and device sharing</li>
            </ul>
            <p>We disclose your personal information for a business purpose to the following categories of third parties:</p>
            <ul>
              <li>Our affiliates and partners</li>
              <li>Service providers</li>
              <li>Third parties to whom you or your agents authorize us to disclose your information in connection with products or services we provide to you</li>
              <li>In the preceding twelve months, we have not sold any personal information.</li>
            </ul>
            <h3>Access to Specific Information and Data Portability Rights</h3>
            <p>You have the right to request that YBVR discloses certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, YBVR will disclose to you:</p>
            <ul>
              <li>The categories of personal information we collected about you.</li>
              <li>The categories of sources for the personal information we collected about you.</li>
              <li>Our business or commercial purpose for collecting or selling that personal information.</li>
              <li>The categories of third parties with whom we share that personal information.</li>
              <li>The specific pieces of personal information we collected about you (also called a data portability request).</li>
              <li>If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:
                <ul>
                  <li>sales, identifying the personal information categories that each category of recipient purchased; and</li>
                  <li>disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.</li>
                </ul>
              </li>
            </ul>
            <p>YBVR may deny your deletion request if retaining the information is necessary for us or our service providers to:</p>
            <ol>
              <li>Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li>
              <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
              <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
              <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
              <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 seq.).</li>
              <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement, if you previously provided informed consent.</li>
              <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
              <li>Comply with a legal obligation.</li>
              <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
            </ol>
            <h3>Exercising Access, Data Portability, and Deletion Rights</h3>
            <p>To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by either:</p>
            <p>Email: <a href="mailto:legal@ybvr.com">legal@ybvr.com</a></p>
            <p>Only you or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.</p>
            <p>You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:</p>
            <ul>
              <li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li>
              <li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
            </ul>
            <p>We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.  Making a verifiable consumer request does not require you to create an account with us.  We will only use personal information provided in a verifiable consumer request to verify the requestor’s identity or authority to make the request.</p>
            <h3>Response Timing and Format</h3>
            <p>YBVR aims to respond to a verifiable consumer request within 45 days of its receipt.  If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.  If you have an account with us, we will deliver our written response to that account.  Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request’s receipt.  The response we provide will also explain the reasons we cannot comply with a request, if applicable.  For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.</p>
            <p>We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.  If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</p>
            <h3>Non-discrimination</h3>
            <p>YBVR will not discriminate against you for exercising any of your CCPA rights.</p>
          </section>

          <section className={styles.policySection} id="section-16" aria-labelledby="heading-16">
            <p className={styles.sectionIndex}>SECTION 16 / 18</p>
            <h2 id="heading-16">No Use by Children</h2>
            <p>The Services are not intended for use by children under the age of 13. We will never knowingly collect information directly from children under the age of 13 without verifiable parental consent. If you are under the age of 13, you may not use the Services and please do not provide us with information of any kind whatsoever. If we become aware that a user is under the age of 13 and has submitted information to the Services without verifiable parental consent, we will remove his or her information from our files and deactivate his or her account. We encourage parents and guardians to spend time with their children online and to be familiar with the websites they visit. If you have reason to believe that we may have accidentally received personal information from a child under the age of 13, please contact us immediately at <a href="mailto:info@ybvr.com">info@ybvr.com</a>.</p>
          </section>

          <section className={styles.policySection} id="section-17" aria-labelledby="heading-17">
            <p className={styles.sectionIndex}>SECTION 17 / 18</p>
            <h2 id="heading-17">Retention of Your Information</h2>
            <p>We retain information for active YBVR accounts as long as it is necessary and relevant for our operations. In addition, we may retain information from closed accounts to comply with the law, prevent fraud, resolve disputes, troubleshoot problems, assist with any investigation, enforce the terms of any agreement between you and YBVR and take other actions permitted by law or disclosed in this Privacy Policy.</p>
          </section>

          <section className={styles.policySection} id="section-18" aria-labelledby="heading-18">
            <p className={styles.sectionIndex}>SECTION 18 / 18</p>
            <h2 id="heading-18">How to Contact Us</h2>
            <p>You may contact us at <a href="mailto:info@ybvr.com">info@ybvr.com</a> if you have any questions about the Privacy Policy</p>
            <h3>Your California Privacy Rights</h3>
            <p>Section 1798.83 of the California Civil Code permits California residents to request from a business, with whom the California resident has an established business relationship, information related to the personal information disclosed by YBVR to third parties for direct marketing purposes and the names and addresses of the third parties with whom the business has shared such information during the immediately preceding calendar year. You may make one request each year by emailing YBVR at <a href="mailto:info@ybvr.com">info@ybvr.com</a> or sending a letter to:</p>
            <address className={styles.address}>
              <span>YBVR,Inc.</span>
              <span>4444 Yerba Buena Ave</span>
              <span>San Jose, CA, 95121</span>
              <span>Attention: Privacy Policy</span>
            </address>
            <p className={styles.effectiveDate}>Effective Date: July, 2026</p>
          </section>

          <div className={styles.endNote}>
            <span>YB / PRIVACY</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </article>
      </div>
    </main>
  );
}
