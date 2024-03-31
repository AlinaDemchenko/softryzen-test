"use client";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';

function Career() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section id="career" className="career">
      <div className="section-container gap-6">
        <div>
          <h2 className="title mb-6 leading-tight">
            CHOOSE <span className="font-medium">US</span>
          </h2>
          <p className="mb-[45px] ml-[123px] text-4xl font-extralight uppercase">
            Why us ?
          </p>
          <ul>
            <li className="career-list">
              <h3 className="career-list-title">Professional development</h3>
              <p className="career-list-description">
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </p>
            </li>
            <li className="career-list">
              <h3 className="career-list-title">Teamwork</h3>
              <p className="career-list-description">
                Join our close-knit family, where support and inspiration
                abound.
              </p>
            </li>
            <li className="career-list">
              <h3 className="career-list-title">
                Stimulating work environment
              </h3>
              <p className="career-list-description">
                Flexibility and remote options for a comfortable experience.
              </p>
            </li>
            <li className="career-list">
              <h3 className="career-list-title">Exciting challenges</h3>
              <p className="career-list-description">
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </p>
            </li>
          </ul>
        </div>
        <div className="pt-4">
          <p className="descr mb-8 ml-auto w-[293px] text-justify">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          <p className="descr mb-3.5 w-[234px]">
            Don&apos;t miss your opportunity! Fill out the form right now and
            join our team!
          </p>
          <form
            action=""
            className="flex gap-6"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className="w-[290px]">
              <div className="relative">
                <label className="detailed-text mb-1 block" htmlFor="name">
                  Full name
                </label>
                <input
                  {...register("name", { required: "Incorrect name" })}
                  className="input mb-6"
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
              <div className="relative">
                <label className="detailed-text mb-1 block" htmlFor="email">
                  E-mail
                </label>
                <input
                  {...register("email", { required: "Invalid email" })}
                  className="input mb-6"
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
              <label className="detailed-text mb-1 block" htmlFor="position">
                Position
              </label>
              <input
                {...register("position")}
                className="input mb-6"
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
                  {...register("phone", { required: "Incorrect phone"})}
                  mask="(999) 999 99 99"
                  maskChar=""
                  className="input mb-9 pl-14"
                  placeholder="(097) 12 34 567"
                  type="tel"
                  id="phone"
                  name="phone"
                  minLength="7"
                  // maxLength="7"
                  pattern="/^\d*$/"
                />
                <span className="absolute start-2 top-0.5 h-7 text-xl font-extralight leading-[1.2]">
                  + 38
                </span>
                {errors.phone && (
                  <p className="form-error top-7">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex gap-x-2">
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
                <label
                  htmlFor="confirmation"
                  className="checkbox-label has-[:checked]:text-indigo-900"
                >
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
                className="input mb-6 h-[268px] w-[292px] resize-none"
                minLength="2"
                maxLength="600"
              ></textarea>
              <button type="submit" className="career-button">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Career;
