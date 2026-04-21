import React, { useState } from 'react';
import { Bell, Check, Trash2 } from 'lucide-react';

export function GenericPlaceholder({ title, description, icon: Icon }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-[var(--color-text-sub)]">
      <Icon size={64} className="mb-6 stroke-[1.5] text-gray-300" />
      <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">{title}</h2>
      <p className="text-base max-w-md text-center leading-relaxed">{description}</p>
      
      <div className="mt-8 flex gap-4">
         <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium border border-gray-200">开发中 In Development</div>
      </div>
    </div>
  );
}

export function NotificationCenter({ role }: { role: string }) {
  const [notifications, setNotifications] = useState([
    { id: 1, title: '规则变更通知', content: '平台对临期商品折扣率阈值进行调整。', time: '10分钟前', read: false },
    { id: 2, title: '履约预警', content: '#1021 订单履约已超时，请相关各方注意。', time: '1小时前', read: true },
    { id: 3, title: '推荐引擎周报', content: '本周您的曝光转化率提升 12%，表现优秀。', time: '1天前', read: false }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    alert('已将所有消息标记为已读');
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <div className="card max-w-3xl mx-auto mt-8">
       <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-serif font-bold text-[#2B2D28] flex items-center gap-2">
             <Bell className="text-[var(--color-primary)]" /> 第四代通知分发引擎
          </h2>
          <button onClick={markAllAsRead} className="text-sm font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1">
             <Check size={16} /> 全部标为已读
          </button>
       </div>

       <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
          {notifications.map(n => (
             <div key={n.id} className={`p-4 rounded-xl border transition-colors ${n.read ? 'bg-[#F9F8F6] border-gray-100 opacity-70' : 'bg-white border-[#3d5a41]/20 shadow-sm border-l-4 border-l-[#3d5a41]'}`}>
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-[#2B2D28] text-base">{n.title}</h4>
                   <span className="text-xs text-gray-400">{n.time}</span>
                </div>
                <p className="text-sm text-[#646A58] mb-3">{n.content}</p>
                {!n.read && (
                   <div className="flex justify-end">
                      <button onClick={() => markAsRead(n.id)} className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors">标为已读</button>
                   </div>
                )}
             </div>
          ))}
          {notifications.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm">当前没有任何消息</div>
          )}
       </div>
    </div>
  )
}
