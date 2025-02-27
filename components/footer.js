import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";

export default function Footer() {
    return(
        <div className="footer">
           <div style={{marginTop: "1.75rem"}}>
              <Image src="/ISO.png"  width={103} height={121} alt="ISO" />
              <Link href="" className="footer-link">
                Success Stories
                <ArrowRight className="footer-icon"/> 
            </Link>
           </div>
           <div style={{marginTop: "1.75rem"}}>
            <p className="footer-text">Government Directory</p>
            <Link href="" className="footer-link">
                Ministries 
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                Departments
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                Parastatal Organisations
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                Other Bodies
                <ArrowRight className="footer-icon"/> 
            </Link>
           </div>
           <div style={{marginTop: "1.75rem"}}>
            <p className="footer-text">Legistlation</p>
            <Link href="" className="footer-link">
                Justice & Defence
                <ArrowRight className="footer-icon"/> 
            </Link>
           </div>
           <div style={{marginTop: "1.75rem"}}>
            <p className="footer-text">Explore Mauritius</p>
            <Link href="" className="footer-link">
                History
                <ArrowRight className="footer-icon"/> 
            </Link>
           </div>
           <div style={{marginTop: "1.75rem"}}>
            <p className="footer-text">Media</p>
            <Link href="" className="footer-link">
                Communiques
                <ArrowRight className="footer-icon"/> 
            </Link>
           </div>
           <div style={{marginTop: "1.75rem"}}>
            <p className="footer-text">Other Links</p>
            <Link href="" className="footer-link">
                News 
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                e-Services
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                IMS Policy
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                Supplier Relationship Policy
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                Terms Of Use
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                Privacy Policy
                <ArrowRight className="footer-icon"/> 
            </Link>
            <Link href="" className="footer-link">
                Contact Us
                <ArrowRight className="footer-icon"/> 
            </Link>
           </div>
        </div>
    )
}