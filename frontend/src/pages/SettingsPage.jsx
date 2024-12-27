import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const SAMPLE_MESSAGES = [
  { id: 1, content: "Hi there! Need help with something?", isSent: false },
  { id: 2, content: "Yes, just exploring the new features!", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-4xl">
      <div className="space-y-8">
        {/* Theme Selection Section */}
        <section>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Personalize Your Experience</h1>
            <p className="text-sm text-base-content/70">
              Customize the look and feel of your chat interface.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  group flex flex-col items-center gap-2 p-3 rounded-lg transition-all shadow
                  ${theme === t ? "bg-primary text-primary-content" : "hover:bg-base-200"}
                `}
                onClick={() => setTheme(t)}
              >
                <div
                  className="relative h-10 w-full rounded-md overflow-hidden border border-base-300"
                  data-theme={t}
                >
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-xs font-medium capitalize">
                  {t}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Chat Preview Section */}
        <section>
          <div className="rounded-xl border border-base-300 bg-base-100 shadow-lg">
            {/* Header */}
            <div className="p-4 border-b border-base-300 bg-primary text-primary-content">
              <h2 className="text-lg font-semibold">Preview Your Chat</h2>
              <p className="text-sm">See how your selected theme will look in action.</p>
            </div>

            <div className="p-4">
              {/* Chat Interface */}
              <div className="bg-base-200 rounded-xl overflow-hidden">
                {/* Chat Header */}
                <div className="px-4 py-3 bg-base-100 border-b border-base-300 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                    A
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Alice</h3>
                    <p className="text-xs text-base-content/70">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-4 bg-base-100 max-h-[250px] overflow-y-auto">
                  {SAMPLE_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[75%] rounded-lg px-4 py-2 shadow-sm
                          ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
                        `}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-[10px] mt-1 ${message.isSent ? "text-primary-content/60" : "text-base-content/60"}`}
                        >
                          1:23 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-base-100 border-t border-base-300">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm"
                      placeholder="Type a message..."
                      readOnly
                      value="This is a preview message."
                    />
                    <button className="btn btn-primary">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;