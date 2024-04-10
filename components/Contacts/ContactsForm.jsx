"use client";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";

function ContactsForm() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <form
      action=""
      className="flex xl:w-[607px] flex-wrap gap-x-5"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      {!isDesktop && (
        <div>
          <div className="relative w-[221px] mb-[28px] xl:mb-7">
            <label className="detailed-text mb-1 block" htmlFor="name">
              Full name
            </label>
            <input
              {...register("name", { required: "Incorrect name" })}
              className={`input ${errors.name ? "text-[#FF5757]" : ""}`}
              placeholder="John Smith"
              type="text"
              id="name"
              name="name"
              minLength="2"
              maxLength="60"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            {errors.name && (
              <p className="form-error"> {errors.name.message}</p>
            )}
          </div>
          <div className="relative w-[221px]">
            <label className="detailed-text mb-1 block" htmlFor="email">
              E-mail
            </label>
            <input
              {...register("email", { required: "Invalid email" })}
              className={`input mb-10 ${errors.email ? "text-[#FF5757]" : ""}`}
              placeholder="johnsmith@email.com"
              type="email"
              id="email"
              name="email"
              maxLength="60"
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </div>
        </div>
      )}
      {isDesktop && (
        <div className="relative w-[293px]">
          <label className="detailed-text mb-1 block" htmlFor="name">
            Full name
          </label>
          <input
            {...register("name", { required: "Incorrect name" })}
            className={`input ${errors.name ? "text-[#FF5757]" : ""}`}
            placeholder="John Smith"
            type="text"
            id="name"
            name="name"
            minLength="2"
            maxLength="60"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          {errors.name && <p className="form-error"> {errors.name.message}</p>}
        </div>
      )}
      {isDesktop && (
        <div className="relative w-[294px]">
          <label className="detailed-text mb-1 block" htmlFor="email">
            E-mail
          </label>
          <input
            {...register("email", { required: "Invalid email" })}
            className={`input mb-10 ${errors.email ? "text-[#FF5757]" : ""}`}
            placeholder="johnsmith@email.com"
            type="email"
            id="email"
            name="email"
            maxLength="60"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
      )}
      <div>
        <label className="detailed-text mb-1 block" htmlFor="message">
          Message
        </label>
        <textarea
          {...register("message")}
          name="message"
          id="message"
          rows="10"
          className="input mb-4 xl:mb-6 h-[221px] xl:h-[174px] w-[463px] xl:w-[607px] resize-none"
          minLength="2"
          maxLength="600"
        ></textarea>
      </div>
      <button type="submit" className="career-button">
        SEND
      </button>
    </form>
  );
}

export default ContactsForm;
