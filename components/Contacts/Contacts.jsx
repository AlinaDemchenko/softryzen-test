import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="section-container block">
        <h2 className="title leading-[1.2] mb-9 xl:mb-[71px]">
          CONTACT <span className="font-medium">US</span>
        </h2>
        <div className="xl:flex">
          <address className="pl-4 mb-3 w-fit mx-auto md:pl-[34px] md:mb-16 xl:mb-0 xl:pl-[83px]">
            <ContactsList />
          </address>
        <ContactsForm />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
