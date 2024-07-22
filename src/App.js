import React, {useState} from "react";
import "./App.css";

export default function App() {
    /*TODO: Khởi tạo biến MESSAGE_ERROR bao gồm các key-value:
        email: ‘Email error’,
        password: ‘Password error’`*/
    const MESSAGE_ERROR = {
        email: "Email error", password: "Password error"
    };
    /*TODO: Khởi tạo biến REGEX bao gồm các key-value:
          email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
           password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/*/
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };

    /*TODO: Khai báo biến form và setForm bằng hàm useState(), giá trị khởi tạo bằng {}
        Khởi tạo hàm handleChange nhận event làm param truyền vào, hàm này sẽ cập nhật lại giá trị mới cho form thông qua hàm setForm
        Khởi tạo biến error mang giá trị khởi tạo bằng toán tử ba ngôi REGEX[event.target.name].test(event.target.value) ? ” : MESSAGE_ERROR[event.target.name]
        Sử dụng hàm setForm để cập nhật lại giá trị mới cho form, param truyền vào bằng { …form, [event.target.name]: { value:event.target.value, error: error }}*/
    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
        setForm({
            ...form, [event.target.name]: {value: event.target.value, error: error}
        });
    }

    /*TODO: Khởi tạo hàm handleSubmit
            Khai báo biến isFilled mang giá trị bằng form.email && form.email.value && form.password && form.password.value
            Khai báo biến isError mang giá trị bằng isFilled && (form.email.error || form.password.error)
            Sử dụng hàm alert để đưa ra thông báo phù hợp
            Nếu isFilled && !isError bằng true thì thông báo đăng ký thành công
            Nếu isFilled && isError bằng false thì thông báo người dùng điền đầy đủ thông tin*/
    function handleSubmit() {
        const isFilled = form.email && form.email.value && form.password && form.password.value;
        const isError = isFilled && (form.email.error || form.password.error);
        alert(isFilled && !isError ? "Login in successfully!!!" : "Please fill out all the fields!!!");
    }

    /*TODO: Tạo hàm return, trả về là element JSX thể hiện các element của form Login
    */
    return (<div>
        <h1>Login</h1>
        <form>
            <div
                className={`custom-input ${form.email && form.email.error && "custom-input-error"}`}
            >
                <label>Email </label>
                <input
                    name="email"
                    value={(form.email && form.email.value) || ""}
                    onChange={handleChange}
                />
                {form.email && form.email.error && (<p className="error">Email error</p>)}
            </div>
            <div
                className={`custom-input ${form.password && form.password.error && "custom-input-error"}`}
            >
                <label>Password </label>
                <input
                    type="password"
                    name="password"
                    value={(form.password && form.password.value) || ""}
                    onChange={handleChange}
                />
                {form.password && form.password.error && (<p className="error">Password error</p>)}
            </div>
            <button type="button" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>);
}