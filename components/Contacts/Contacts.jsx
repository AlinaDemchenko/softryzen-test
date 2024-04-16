import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";
import Image from "next/image";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts-bg">
        <Image
          src="/background/contacts/contacts@2x.webp"
          alt="landscape"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="section-container block">
        <h2 className="title mb-9 leading-[1.2] xl:mb-[71px]">
          CONTACT <span className="font-medium">US</span>
        </h2>
        <div className="xl:flex">
          <address className="mx-auto mb-3 w-fit pl-4 md:mb-16 md:pl-[34px] xl:mb-0 xl:pl-[83px]">
            <ContactsList />
          </address>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
