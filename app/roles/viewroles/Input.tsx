"use client";

type FloatingInputProps = {
  id: string;
  label: string;
  value?: string;
  empty: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  id,
  label,
  empty,
  value,
  onChange,
}: FloatingInputProps) {
  return (
    <div className=" group relative w-full my-3">
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={label}
        className={` ${empty && "ring-1 ring-red-300"}
          peer  w-full rounded-xl border border-[#E1E1E1]
          px-3 pt-3 pb-3 text-[14px] font-medium
          transition-all duration-200
          focus:border-[#363636]
       
          focus:outline-none group-focus-within:pt-5 group-focus-within:pb-2
        `}
      />

      <label
        htmlFor={id}
        className="
          absolute left-2 top-1/2 -translate-y-1/2
          bg-white px-1
          text-gray-400
          opacity-0
          transition-all duration-200

          peer-placeholder-shown:top-1/2
          peer-focus:opacity-100
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
        
          peer-focus:top-2
          peer-focus:text-[10px]
          peer-focus:text-[#00000066]
          peer-focus:translate-y-0
        "
      >
        {label}
      </label>
    </div>
  );
}
