import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Store, User, Truck, Shield } from 'lucide-react';
import { AnimatedPage, AnimatedItem } from './components/Motion';

export function AuthPage() {
  const { mode = 'login', role = 'user' } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Re-scroll to top when mode/role changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mode, role]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Route after login/register
      if (role === 'user') navigate('/u/home');
      else if (role === 'merchant') navigate('/m/home');
      else if (role === 'rider') navigate('/r/tasks');
      else if (role === 'admin') navigate('/admin/home');
    }, 800);
  };

  const getRoleInfo = (r: string) => {
    switch(r) {
      case 'merchant': return { title: '商家端', icon: Store, bg: 'https://picsum.photos/seed/bakery2/1200/1600' };
      case 'rider': return { title: '骑手端', icon: Truck, bg: 'https://picsum.photos/seed/streetbike/1200/1600' };
      case 'admin': return { title: '管理中心', icon: Shield, bg: 'https://picsum.photos/seed/architecture/1200/1600' };
      default: return { title: '购买者', icon: User, bg: 'https://picsum.photos/seed/freshfood/1200/1600' };
    }
  };

  const info = getRoleInfo(role);
  const isLogin = mode === 'login';

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)]">
      {/* Left Atmospheric Image - Hidden on mobile */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={info.bg} alt="Background" className="w-full h-full object-cover scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/30 to-transparent mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors backdrop-blur-md bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
            <ArrowLeft size={16} className="mr-2" /> 返回选择身份
          </Link>
        </div>

        <div className="relative z-10 text-white pb-12">
          <h1 className="text-6xl font-serif mb-6 text-shadow-lg leading-tight">RescueFood</h1>
          <p className="text-xl font-medium opacity-90 max-w-md leading-relaxed text-shadow">
            唤醒临期食物的生命力。<br/>
            连接每一份珍贵的资源，用科技构建有温度的同城网络。
          </p>
        </div>
      </div>

      {/* Right Form Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 relative">
        <Link to="/" className="lg:hidden absolute top-8 left-8 inline-flex items-center text-[var(--color-muted)] hover:text-black transition-colors">
          <ArrowLeft size={16} className="mr-2" /> 返回
        </Link>
        
        <AnimatedPage className="w-full max-w-md">
          <AnimatedItem>
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-8">
              <info.icon size={32} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[var(--color-text-main)] mb-2">
              {isLogin ? `欢迎回到${info.title}` : `加入${info.title}`}
            </h2>
            <p className="text-[var(--color-muted)] mb-8">
              {isLogin ? '输入您的凭证以继续访问系统' : '填写基础信息，即刻开启零浪费之旅'}
            </p>
          </AnimatedItem>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatedItem>
              {/* Common Fields */}
              {role === 'user' && (
                <>
                  {!isLogin && (
                    <div className="mb-5">
                      <label className="block text-sm font-medium mb-1.5 text-gray-700">用户昵称</label>
                      <input type="text" required className="auth-input" placeholder="您希望我们如何称呼您" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-gray-700">手机号 / 邮箱</label>
                    <input type="text" required className="auth-input" placeholder="输入账号" />
                  </div>
                </>
              )}

              {role === 'merchant' && (
                <>
                  {!isLogin && (
                    <>
                      <div className="mb-5">
                        <label className="block text-sm font-medium mb-1.5 text-gray-700">门店名称</label>
                        <input type="text" required className="auth-input" placeholder="例如：阳光超市（高新店）" />
                      </div>
                      <div className="mb-5">
                        <label className="block text-sm font-medium mb-1.5 text-gray-700">统一社会信用代码</label>
                        <input type="text" required className="auth-input" placeholder="18位营业执照编号" />
                      </div>
                    </>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-gray-700">负责人手机</label>
                    <input type="tel" required className="auth-input" placeholder="登录与接收平台通知手机号" />
                  </div>
                </>
              )}

              {role === 'rider' && (
                <>
                  {!isLogin && (
                    <div className="mb-5">
                      <label className="block text-sm font-medium mb-1.5 text-gray-700">真实姓名</label>
                      <input type="text" required className="auth-input" placeholder="您的真实姓名" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-gray-700">注册手机号</label>
                    <input type="tel" required className="auth-input" placeholder="用于接单和联络" />
                  </div>
                </>
              )}
              
              {role === 'admin' && (
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">内部管理专用信箱</label>
                  <input type="email" required className="auth-input" placeholder="name@rescuefood.com" />
                </div>
              )}
            </AnimatedItem>

            <AnimatedItem>
              <label className="block text-sm font-medium mb-1.5 text-gray-700">访问密码</label>
              <input type="password" required className="auth-input" placeholder="••••••••" />
              {isLogin && <div className="text-right mt-2"><a href="#" className="text-xs text-[var(--color-primary)] hover:underline">忘记密码？</a></div>}
            </AnimatedItem>

            <AnimatedItem className="pt-2">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[var(--color-primary)] text-white font-medium py-3.5 rounded-xl hover:bg-[#2d4230] hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 flex justify-center items-center"
              >
                {isLoading ? (
                   <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                   isLogin ? '登入系统' : '注册并申请'
                )}
              </button>
            </AnimatedItem>
          </form>

          {role !== 'admin' && (
            <AnimatedItem className="mt-8 text-center text-sm text-[var(--color-muted)]">
              {isLogin ? (
                <>没有账号？ <Link to={`/auth/register/${role}`} className="text-[var(--color-primary)] font-medium hover:underline">立即注册新账号</Link></>
              ) : (
                <>已有账号？ <Link to={`/auth/login/${role}`} className="text-[var(--color-primary)] font-medium hover:underline">返回登录</Link></>
              )}
            </AnimatedItem>
          )}
        </AnimatedPage>
      </div>
    </div>
  );
}
