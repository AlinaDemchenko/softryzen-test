import Link from "next/link";

function ContactsList() {
  return (
    <ul className="xl:mr-[231px] md:flex md:w-full gap-x-[90px] xl:gap-0 xl:block xl:w-fit">
      <div>
        <li className="contact-list-item mb-6 xl:mb-16">
          <ul className="w-[164px] md:w-fit">
            <li className="contact-link">
              <Link href="tel:+380981234567" className="career-list-title hover:underline leading-6 not-italic">+38 (098) 12 34 567</Link>
            </li>
            <li className="contact-link">
              <Link className="career-list-title hover:underline leading-6 not-italic" href="tel:+380731234567">+38 (073) 12 34 567</Link>
            </li>
          </ul>
          <p className="detailed-text leading-5 tracking-normal not-italic w-[81px]">Phone number</p>
        </li>
        <li className="contact-list-item mb-[26px] md:mb-0 xl:mb-[124px]">
          <li className="contact-link">
            <Link className="career-list-title hover:underline leading-6 not-italic" href="mailto:support@carptravel.com">support@carptravel.com</Link>
          </li>
          <p className="detailed-text leading-5 tracking-normal not-italic">E-mail</p>
        </li>
      </div>
      <li className="contact-list-item flex-row-reverse justify-end md:justify-start xl:flex-row">
        <ul>
          <li className="contact-link text-start xl:text-end">
            <Link className="career-list-title hover:underline leading-6 not-italic" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Carptravel">facebook</Link>
          </li>
          <li className="contact-link text-start xl:text-end">
            <Link className="career-list-title hover:underline leading-6 not-italic" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/carp.travel/">instagram</Link>
          </li>
          <li className="contact-link text-start xl:text-end">
            <Link className="career-list-title hover:underline leading-6 not-italic" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCh3mbrHGN1f69oZhwDrScDw">youtube</Link>
          </li>
          <li className="contact-link text-start xl:text-end">
            <Link className="career-list-title hover:underline leading-6 not-italic" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/travelcarp">tiktok</Link>
          </li>
        </ul>
        <p className="detailed-text text-end leading-5 tracking-normal not-italic w-[164px] md:text-start md:w-fit">Follow us</p>
      </li>
    </ul>
  );
}

export default ContactsList;
