"use client";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

function CareerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      position: "",
      phone: "",
      message: "",
    },
    mode: "onBlur"
  });

  return (
    <form
      className="mx-auto w-[279px] gap-6 md:flex md:w-full"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}
    >
      <div className="md:w-[222px] xl:w-[290px]">
        <div className="relative">
          <label className="detailed-text mb-1 block" htmlFor="name">
            Full name
          </label>
          <input
            {...register("name", {
              required: "Incorrect name",
              minLength: { value: 2, message: "Incorrect name" },
              maxLength: { value: 60, message: "Incorrect name"},
              pattern: {
                value: /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i, message: "Incorrect name"
            }})}
            className={`input mb-4 xl:mb-6 ${
              errors.name ? "text-[#FF5757]" : ""
            }`}
            placeholder="John Smith"
            type="text"
            id="name"
            name="name"
          />
          {errors.name && <p className="form-error"> {errors.name.message}</p>}
        </div>
        <div className="relative">
          <label className="detailed-text mb-1 block" htmlFor="email">
            E-mail
          </label>
          <input
            {...register("email", {
                required: "Invalid email",
                maxLength: { value: 60, message: "Invalid email"},
                pattern: {
                  value: /^\S+@\S+$/i, message: "Invalid email"
              }}
            )}
            type="email"
            className={`input mb-4 xl:mb-6 ${
              errors.email ? "text-[#FF5757]" : ""
            }`}
            placeholder="johnsmith@email.com"
            id="email"
            name="email"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <label className="detailed-text mb-1 block" htmlFor="position">
          Position
        </label>
        <input
          {...register("position")}
          className="input mb-4 xl:mb-6"
          placeholder="Movie maker"
          type="text"
          id="position"
          name="position"
          maxLength="60"
        />
        <label className="detailed-text mb-1 block" htmlFor="phone">
          Phone
        </label>
        <div className="relative">
          <InputMask
            {...register("phone", {
              required: "Incorrect phone",
              minLength: { value: 7, message: "Incorrect phone" },
            })}
            mask="(999) 999 99 99"
            maskChar=""
            className={`input mb-4 pl-10 xl:mb-9 xl:pl-14 ${
              errors.phone ? "text-[#FF5757]" : ""
            }`}
            placeholder="(097) 12 34 567"
            type="tel"
            id="phone"
            name="phone"
          />
          <span
            className={`absolute start-2 top-0.5 h-6 text-[13px]/6 font-extralight md:top-[0.8px] xl:top-0.5 xl:h-7 xl:text-xl xl:leading-[1.2] ${
              errors.phone ? "text-[#FF5757]" : ""
            }`}
          >
            + 38
          </span>
          {errors.phone && (
            <p className="form-error top-7">{errors.phone.message}</p>
          )}
        </div>
          <div className="gap-x-2 hidden md:flex">
            <input
              {...register("confirmation", { required: true })}
              id="confirmation"
              type="checkbox"
              name="confirmation"
              className={
                errors.confirmation
                  ? "checkbox bg-[url('/icons/error_checkbox.svg')] xl:bg-[url('/icons/error_checkbox_desk.svg')]"
                  : "checkbox"
              }
            />
            <label htmlFor="confirmation" className="checkbox-label">
              I confirm my consent to the processing of personal data.
            </label>
          </div>
      </div>
      <div>
        <label className="detailed-text mb-1 block" htmlFor="message">
          Message
        </label>
        <textarea
          {...register("message")}
          name="message"
          id="message"
          rows="10"
          className="input mb-4 h-[196px] resize-none md:mb-[9px] md:h-[228px] md:w-[221px] xl:mb-6 xl:h-[268px] xl:w-[292px]"
          minLength="2"
          maxLength="600"
        ></textarea>
          <div className="mb-4 flex gap-x-2 md:hidden">
            <input
              {...register("confirmation", { required: true })}
              id="confirmation"
              type="checkbox"
              name="confirmation"
              className={
                errors.confirmation
                  ? "checkbox bg-[url('/icons/error_checkbox.svg')]"
                  : "checkbox"
              }
            />
            <label htmlFor="confirmation" className="checkbox-label">
              I confirm my consent to the processing of personal data.
            </label>
          </div>
        <button type="submit" className="career-button">
          SEND
        </button>
      </div>
    </form>
  );
}

export default CareerForm;
