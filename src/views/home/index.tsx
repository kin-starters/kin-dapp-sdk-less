// Next, React
import { FC } from 'react';

import pkg from '../../../package.json';

export const HomeView: FC = () => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Kin SDK-less DApp Demo{' '}
          <span className="text-sm font-normal align-top text-slate-700">
            v{pkg.version}
          </span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p>The easiest way to get started with Kin.</p>
          Next.js, tailwind, wallet, web3.js, and more.
        </h4>
        <div className="max-w-md mx-auto mockup-code bg-primary p-6 my-2 ">
          <pre data-prefix=">">
            <code className="truncate fade-in">
              Start building with Kin on Solana{' '}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
