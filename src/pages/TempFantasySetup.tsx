import React, { useState, useEffect } from 'react';
import { post } from '@/services/api';
import { SleeperUser } from '@/types/sleeper';
import { useNavigate } from 'react-router-dom';

const SLEEPER_AVATAR_URL = 'https://sleepercdn.com/avatars';

const TempFantasySetup = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [sleeperUser, setSleeperUser] = useState<SleeperUser | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await post<SleeperUser>('sleeper/user/fetch/', {
        username,
      });
      setSleeperUser(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!sleeperUser) return;

    setError(null);
    setVerifyLoading(true);

    try {
      const response = await post('sleeper/user/create/', {
        username: sleeperUser.username,
      });

      console.log('User verified and created:', response);
      navigate('/profile');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to verify user.');
      }
    } finally {
      setVerifyLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900"
              >
                Enter your Sleeper username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="current-password"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {loading && <div className="text-red-500">Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {sleeperUser && (
              <div className="text-green-500">{sleeperUser.username}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Setup for League
              </button>
            </div>
          </form>
          <div className="max-w-2xl pt-12 ">
            <fieldset>
              {sleeperUser && (
                <div className="space-y-10">
                  <div className="flex items-center gap-x-6 ">
                    <img
                      alt=""
                      src={`${SLEEPER_AVATAR_URL}/${sleeperUser.avatar}`}
                      className="size-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                        {sleeperUser?.username}
                      </h3>
                      <p className="text-sm/6 font-semibold text-indigo-600">
                        {sleeperUser?.display_name}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleVerify}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={verifyLoading}
                  >
                    {verifyLoading ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              )}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempFantasySetup;
