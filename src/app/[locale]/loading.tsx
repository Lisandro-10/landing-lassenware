export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-tertiary dark:bg-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-border dark:border-gray-700 rounded-full" />
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-xs text-text-tertiary animate-pulse font-medium tracking-widest uppercase">
          Lassenware
        </p>
      </div>
    </div>
  );
}