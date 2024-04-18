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
    mode: "onChange",
  });

  return (
    <form
      className="md:flex md:flex-wrap md:gap-x-5 xl:w-[607px]"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      {!isDesktop && (
        <div>
          <div className="relative mb-[25px] md:mb-[28px] md:w-[221px] xl:mb-7">
            <label className="detailed-text mb-1 block" htmlFor="name">
              Full name
            </label>
            <input
              {...register("name", {
                required: "Incorrect name",
                minLength: { value: 2, message: "Incorrect name" },
                maxLength: { value: 60, message: "Incorrect name" },
                pattern: {
                  value:
                    /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
                  message: "Incorrect name",
                },
              })}
              className={`input ${errors.name ? "text-[#FF5757]" : ""}`}
              placeholder="John Smith"
              type="text"
              id="name"
              name="name"
            />
            {errors.name && (
              <p className="form-error"> {errors.name.message}</p>
            )}
          </div>
          <div className="relative mb-6 md:mb-0 md:w-[221px]">
            <label className="detailed-text mb-1 block" htmlFor="email">
              E-mail
            </label>
            <input
              {...register("email", {
                required: "Invalid email",
                maxLength: { value: 60, message: "Invalid email" },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              type="email"
              className={`input ${errors.email ? "text-[#FF5757]" : ""}`}
              placeholder="johnsmith@email.com"
              id="email"
              name="email"
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
            {...register("name", {
              required: "Incorrect name",
              minLength: { value: 2, message: "Incorrect name" },
              maxLength: { value: 60, message: "Incorrect name" },
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
                message: "Incorrect name",
              },
            })}
            className={`input ${errors.name ? "text-[#FF5757]" : ""}`}
            placeholder="John Smith"
            type="text"
            id="name"
            name="name"
          />
          {errors.name && <p className="form-error"> {errors.name.message}</p>}
        </div>
      )}
      {isDesktop && (
        <div className="relative mb-10 w-[294px]">
          <label className="detailed-text mb-1 block" htmlFor="email">
            E-mail
          </label>
          <input
            {...register("email", {
              required: "Invalid email",
              maxLength: { value: 60, message: "Invalid email" },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            type="email"
            className={`input ${errors.email ? "text-[#FF5757]" : ""}`}
            placeholder="johnsmith@email.com"
            id="email"
            name="email"
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
          className="input mb-4 h-[221px] resize-none md:w-[463px] xl:mb-6 xl:h-[174px] xl:w-[607px]"
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
