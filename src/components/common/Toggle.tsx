import { useEffect, useState } from 'react';

interface IToggle {
  text?: string;
  checked?: boolean;
  onChange?: (toggle: boolean) => void;
}
export default function Toggle({
  text = '',
  checked = true,
  onChange = () => {},
}: IToggle) {
  const [checkedState, setCheckedState] = useState(checked);
  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <input
          type="checkbox"
          className="toggle"
          checked={checkedState}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
      </label>
    </div>
  );
}
