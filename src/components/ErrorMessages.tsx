interface ErrorMessagesProps {
  errorMessage?: string;
  isValid?: boolean;
}

export default function ErrorMessages({
  isValid,
  errorMessage,
}: ErrorMessagesProps) {
  return (
    <>
      <ul className="max-w-md mt-2 h-3 space-y-1 text-red-500 list-disc list-inside text-xs">
        {!isValid && <li>{errorMessage}</li>}
      </ul>
    </>
  );
}
