import React from "react";

/**
 * Компонент таблицы интеграций с блогерами.
 *
 * @param {Object} props
 * @param {Array} props.bloggers - Список блогеров с результатами интеграции
 */
export default function BloggersTable({ bloggers }) {
  if (!bloggers || bloggers.length === 0) return null;

  return (
    <div className="mt-20 overflow-hidden" data-reveal-up>
      <div className="bg-[#0b0c0e]/80 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight-custom uppercase text-white">
            Блогеры
          </h3>
          <span
            className="text-muted/60 text-sm cursor-help"
            title="Результаты интеграций с блогерами"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[14px] font-normal tracking-tight-custom text-muted">
            <thead>
              <tr className="border-b border-white/10 text-white font-medium">
                <th className="py-4 pr-4">Название канала</th>
                <th className="py-4 px-4 whitespace-nowrap">Кол-во подписчиков</th>
                <th className="py-4 px-4">Условия размещения</th>
                <th className="py-4 pl-4 whitespace-nowrap">Приход подписчиков</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {bloggers.map((blogger, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/[0.01] transition-colors"
                >
                  <td className="py-4 pr-4 text-white font-medium">
                    {blogger.channel}
                  </td>
                  <td className="py-4 px-4">{blogger.followers}</td>
                  <td className="py-4 px-4 max-w-[300px] leading-relaxed">
                    {blogger.terms}
                  </td>
                  <td className="py-4 pl-4">{blogger.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
