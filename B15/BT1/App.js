import { useForm } from "react-hook-form";

function HealthDeclarationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Họ và tên:</label>
        <input {...register("name", { required: true })} />
        <br />

        <label htmlFor="address">Địa chỉ:</label>
        <input {...register("address", { required: true })} />
        <br />

        <label htmlFor="phone">Số điện thoại:</label>
        <input
          {...register("phone", {
            required: true,
            pattern: /^0\d{9}$/i,
          })}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />

        <label htmlFor="symptoms">
          Trong vòng 14 ngày qua, bạn có dấu hiệu triệu chứng như sau:
        </label>
        <br />

        <div>
          <input type="checkbox" {...register("symptoms.fever")} />
          <label htmlFor="symptoms.fever">Sốt</label>
        </div>
        <div>
          <input type="checkbox" {...register("symptoms.cough")} />
          <label htmlFor="symptoms.cough">Ho</label>
        </div>
        <div>
          <input type="checkbox" {...register("symptoms.breath")} />
          <label htmlFor="symptoms.breath">Khó thở</label>
        </div>

        <button type="submit">Gửi thông tin</button>
      </form>
    </div>
  );
}
export default HealthDeclarationForm;
