"use client";

const Terms = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms and Conditions</h1>
      <p style={styles.paragraph}>Please review these terms carefully before accessing or using any part of the website.</p>

      <p style={styles.paragraph}>
        Welcome to onnicasino.com, including its subdomains, content, and brands, hereafter referred to as the "Website."
        By accessing or using this Website, you confirm that you understand and agree to be legally bound by these terms
        and our Privacy Policy, forming a binding agreement with us. You can access our <strong>Privacy Policy</strong> here.
        Additionally, you waive any requirement for non-electronic signatures or original documents.
      </p>
      <h2 style={styles.subheading}>1. Modifications</h2>
      <p style={styles.paragraph}>
        We reserve the right to alter these terms at any time. Updated terms take effect ten (10) days after being posted,
        and continued use of the site signifies acceptance of these changes.
      </p>

      <h2 style={styles.subheading}>2. Age Requirements</h2>
      <p style={styles.paragraph}>
        The Website is intended only for individuals aged 18 and over. If you are under 18, please do not use the Website.
      </p>

      <h2 style={styles.subheading}>3. Website Usage</h2>
      <p style={styles.paragraph}>
        You are permitted to access and use the Website as long as you comply with these terms and all applicable laws.
      </p>

      <h2 style={styles.subheading}>4. Usage Restrictions</h2>
      <p style={styles.paragraph}>
        You are prohibited from: (i) copying, modifying, or mirroring any Website content without permission; (ii) using
        the content beyond personal use; (iii) disrupting website servers or networks; (iv) using automated tools to access
        the Website; and (v) bypassing any Website restrictions.
      </p>

      <h2 style={styles.subheading}>5. Intellectual Property</h2>

      <h3 style={styles.subheading}>5.1 Ownership</h3>
      <p style={styles.paragraph}>
        Content on this Website, including text, graphics, images, software, and trademarks, is our property or licensed to us
        and is protected by intellectual property laws. Unauthorized use of this content is prohibited.
      </p>

      <h3 style={styles.subheading}>5.2 Permitted Use</h3>
      <p style={styles.paragraph}>
        Content is provided for personal use only and may not be copied, altered, or distributed for any other purpose without
        our written permission.
      </p>

      <h2 style={styles.subheading}>6. Third-Party Content</h2>
      <p style={styles.paragraph}>
        <strong>6.1</strong> The Website may feature content from third parties, not owned or controlled by us. We are not responsible
        for this content or its accuracy.
      </p>
      <p style={styles.paragraph}>
        <strong>6.2</strong> We disclaim responsibility for third-party content, which may contain inaccuracies or objectionable
        material. Interactions with third-party content are at your own risk.
      </p>

      <h2 style={styles.subheading}>7. Content Accuracy</h2>
      <p style={styles.paragraph}>
        While we strive for accuracy, we do not guarantee that Website content is complete or error-free. You assume any risks
        related to using the content.
      </p>

      <h2 style={styles.subheading}>8. Information Disclosure</h2>
      <p style={styles.paragraph}>
        We may disclose collected information if necessary to comply with legal processes, enforce terms, or protect rights.
      </p>

      <h2 style={styles.subheading}>9. Links</h2>

      <p style={styles.paragraph}>
        <strong>9.1</strong> Our Website may link to third-party sites. We are not liable for third-party content, policies,
        or practices.
      </p>

      <h2 style={styles.subheading}>10. Privacy</h2>
      <p style={styles.paragraph}>
        Personal information is handled per our Privacy Policy, accessible in the Privacy section.
      </p>

      <h2 style={styles.subheading}>11. Disclaimer of Warranties</h2>
      <p style={styles.paragraph}>
        <strong>11.1</strong> The Website is provided “as is,” without warranties. Certain laws may not allow such exclusions.
      </p>

      <h2 style={styles.subheading}>12. Limitation of Liability</h2>
      <p style={styles.paragraph}>
        We are not liable for indirect damages or losses. Total liability, if applicable, is limited to $1,000.
      </p>

      <h2 style={styles.subheading}>13. Indemnification</h2>
      <p style={styles.paragraph}>
        You agree to indemnify us against any claims arising from your use of the Website.
      </p>

      <h2 style={styles.subheading}>14. Termination</h2>
      <p style={styles.paragraph}>
        We may terminate your access to the Website at any time. Upon termination, you must discontinue use.
      </p>

      <h2 style={styles.subheading}>15. Independent Relationship</h2>
      <p style={styles.paragraph}>
        These terms do not create any partnership, agency, or employment relationship.
      </p>

      <h2 style={styles.subheading}>16. Assignment</h2>
      <p style={styles.paragraph}>
        We may assign these terms at our discretion; you may not.
      </p>

      <h2 style={styles.subheading}>17. General</h2>
      <p style={styles.paragraph}>
        These terms are governed by Israeli law. Any legal action must be filed within one year.
      </p>

      <p style={styles.paragraph}>
        You are responsible for monitoring gambling behavior and seeking assistance if needed. Visit gambleaware.org for
        resources.
      </p>

      <p style={styles.paragraph}>
        The Website makes no guarantees regarding the accuracy of content within the game. The virtual currency has no real
        value and cannot be redeemed for cash or goods.
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#121212',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#ffffff',
    textAlign: 'center' as 'center', 
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: '#9013fe',
    fontWeight: '600',
    borderBottom: '4px solid #9013fe',
    paddingBottom: '5px',
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#ffffff',
  },
};


export default Terms;
