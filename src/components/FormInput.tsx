import { useForm } from "react-hook-form";

interface IFormInputProps {
    name: string;
    lebel: string;
    type: string
    placeholder?: string;
    register?: any
    defaultValue?: string;
    value?: string
}
const FormInput = (props: IFormInputProps) => {
    return (
        <div className='flex flex-col my-3 w-full mx-1'>
          <label className="font-semibold" htmlFor="">{props.lebel}</label>
          <input className='border my-2 px-2 py-1 focus:border-none focus:outline-none focus:ring focus:ring-blue-300'  {...props.register(`${props.name}`, { required: true })} placeholder={`${props.placeholder}`} type={`${props.type}`} defaultValue={props.defaultValue} value={props.value} />
        </div>
    );
};

export default FormInput;