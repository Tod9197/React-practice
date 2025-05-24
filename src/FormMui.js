import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormMui() {
  const defaultValues = {
    name: "名無しの権兵衛",
    email: "admin@example.com",
    gender: "male",
    memo: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <TextField
          label="名前"
          margin="normal"
          {...register("name", {
            required: "名前は入力必須です。",
            maxLength: {
              value: 20,
              message: "名前は20文字以内にしてください。",
            },
          })}
          error={"name" in errors}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <FormControl error={"gender" in errors}>
          <FormLabel component="legend">性別 : </FormLabel>
          <RadioGroup name="gender">
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="男性"
              {...register("gender", {
                required: "性別は必須項目です。",
              })}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="女性"
              {...register("gender", {
                required: "性別は必須項目です。",
              })}
            />
          </RadioGroup>
          <FormHelperText error={"gender" in errors}>
            {errors.gender?.message}
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <TextField
          label="メールアドレス"
          margin="normal"
          {...register("email", {
            required: "メールアドレスは入力必須です。",
            pattern: {
              value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
              message: "メールアドレスの形式が不正です",
            },
          })}
          error={"email" in errors}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          label="メモ"
          margin="normal"
          multiline
          {...register("memo", {
            required: "備考は入力必須です。",
            minLength: {
              value: 10,
              message: "備考は10文字以上にしてください。",
            },
          })}
          error={"memo" in errors}
          helperText={errors.memo?.message}
        />
      </div>
      <div>
        <Button variant="contained" type="submit">
          送信
        </Button>
      </div>
    </form>
  );
}
