import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

yup.addMethod(yup.string, "ng", function () {
  return this.test(
    "ng",
    ({ label }) => `${label}にNGワードが含まれています。`,
    (value) => {
      const ngs = ["暴力", "死", "グロ"];
      for (const ng of ngs) {
        if (value.includes(ng)) {
          return false;
        }
      }
      return true;
    }
  );
});

const schema = yup.object({
  name: yup
    .string()
    .label("名前")
    .trim()
    .lowercase()
    .required("${label}は必須項目です")
    .max(20, "${label}は${max}文字以内で入力してください。"),
  gender: yup.string().label("性別").required("${label}は必須入力です。"),
  email: yup
    .string()
    .label("メールドレス")
    .required("${label}は必須入力です。")
    .email("${label}の形式が不正です。"),
  memo: yup
    .string()
    .label("備考")
    .required("${label}は必須入力です。")
    .min(10, "${label}は${min}文字以上で入力してください。")
    .ng(),
});

export default function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "名無しの権兵衛",
      email: "admin@example.com",
      gender: "male",
      memo: "",
    },

    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前:</label>
        <br />
        <input id="name" type="text" {...register("name")} />
        <div>{errors.name?.message}</div>
      </div>
      <div>
        <label>性別:男性</label>
        <br />
        <input type="radio" value="male" {...register("gender")} />
        男性
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label>性別:</label>
        <br />
        <input type="radio" value="female" {...register("gender")} />
        女性
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <br />
        <input id="email" type="email" {...register("email")} />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考:</label>
        <br />
        <textarea id="memo" {...register("memo")} />
        <div>{errors.memo?.message}</div>
      </div>
      <button type="submit">送信</button>
    </form>
  );
}
