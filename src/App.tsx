/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

// Layouts
import { UserLayout, BusinessLayout } from './layouts';

// Pages
import { UserHome, UserRecommend, FoodDetail, UserCart, UserOrders, UserProfile, UserFavorites } from './UserPages';
import { MerchantHub, BatchBoard, MerchantOrders, MerchantSettings, MerchantRegister, MerchantProducts, MerchantPackages } from './BusinessPages';
import { RiderTasks, RiderCurrent, RiderHistory, RiderProfile } from './RiderPages';
import { AdminHome, AdminMerchants, AdminUsers, AdminRules, AdminReports, AdminOrders, AdminRecommendPerformance, AdminRiders } from './AdminPages';
import { GenericPlaceholder, NotificationCenter } from './Shared';
import { AuthPage } from './AuthPages';
import { Bell, User as UserIcon, Store, Truck, LayoutDashboard, Leaf } from 'lucide-react';

import { motion } from 'motion/react';

function RoleSelect() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } } };
  
  return (
    <div className="flex min-h-screen bg-[var(--color-bg)] text-[#2B2D28] overflow-hidden relative">
      {/* Decorative organic shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#EAE2D6] rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#E3E8E1] rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center px-6 sm:px-12 py-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold tracking-widest uppercase mb-6 text-sm">
            <Leaf size={18} /> 
            RescueFood 统一入口
          </div>
          <h1 className="text-6xl font-serif font-bold tracking-tight mb-6">珍视每份馈赠</h1>
          <p className="text-[#646A58] mb-16 text-xl max-w-2xl font-serif leading-relaxed">
            在一个平台，连接多重身份。<br/>
            无论您是渴望发现惊喜的消费者，还是希望减少损耗的商家。
          </p>
        </motion.div>
        
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div variants={item}>
            <Link to="/auth/login/user" className="group flex flex-col h-full bg-white p-8 rounded-[32px] border border-[#EAE8E1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#F2ECE6] text-[#A67B5B] rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-[#A67B5B] group-hover:text-white transition-colors duration-300">
                <UserIcon strokeWidth={2}/>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">购买者</h3>
              <p className="text-[#848A78] text-sm mb-8 flex-1 leading-relaxed">发现同城优质临期特惠，用实际行动支持环保，同时省下钱包。</p>
              <div className="flex items-center text-sm font-bold text-[#A67B5B]">进入系统 &rarr;</div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link to="/auth/login/merchant" className="group flex flex-col h-full bg-white p-8 rounded-[32px] border border-[#EAE8E1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#E3E8E1] text-[var(--color-primary)] rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                <Store strokeWidth={2}/>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">合作商户</h3>
              <p className="text-[#848A78] text-sm mb-8 flex-1 leading-relaxed">数字化管理临期库存，一键化发布抢救批次，零风险提升利润率。</p>
              <div className="flex items-center text-sm font-bold text-[var(--color-primary)]">商户登入 &rarr;</div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link to="/auth/login/rider" className="group flex flex-col h-full bg-white p-8 rounded-[32px] border border-[#EAE8E1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-[#EFE8D8] text-[var(--color-secondary)] rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors duration-300">
                <Truck strokeWidth={2}/>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">调度骑士</h3>
              <p className="text-[#848A78] text-sm mb-8 flex-1 leading-relaxed">作为运力枢纽接取同城单，高效流转资源，赚取履约酬谢金。</p>
              <div className="flex items-center text-sm font-bold text-[var(--color-secondary)]">接取任务 &rarr;</div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
             <Link to="/auth/login/admin" className="group flex flex-col h-full bg-[#2B2D28] text-white p-8 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-white/10 text-white rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#2B2D28] transition-colors duration-300">
                <LayoutDashboard strokeWidth={2}/>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">平台管理</h3>
              <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed">全盘掌控生态网络，制定定价阈值与风控策略，专属最高权限系统。</p>
              <div className="flex items-center text-sm font-bold text-white opacity-80 group-hover:opacity-100">内部通道 &rarr;</div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<RoleSelect />} />
        <Route path="/auth/:mode/:role" element={<AuthPage />} />
        <Route path="/merchant/register" element={<Navigate to="/auth/register/merchant" replace />} />
        
        {/* User Routes (Web 80px Left Sidebar) */}
        <Route path="/u" element={<UserLayout />}>
          <Route path="home" element={<UserHome />} />
          <Route path="recommend" element={<UserRecommend />} />
          <Route path="food/:id" element={<FoodDetail />} />
          <Route path="cart" element={<UserCart />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="favorites" element={<UserFavorites />} />
          <Route path="notifications" element={<NotificationCenter role="user" />} />
        </Route>

        {/* Merchant Routes (Web 220px Left Sidebar) */}
        <Route path="/m" element={<BusinessLayout role="merchant" title="商家中心" />}>
          <Route path="home" element={<MerchantHub />} />
          <Route path="batches" element={<BatchBoard />} />
          <Route path="orders" element={<MerchantOrders />} />
          <Route path="settings" element={<MerchantSettings />} />
          <Route path="products" element={<MerchantProducts />} />
          <Route path="packages" element={<MerchantPackages />} />
          <Route path="notifications" element={<NotificationCenter role="merchant" />} />
        </Route>

        {/* Rider Routes (Web 220px Left Sidebar) */}
        <Route path="/r" element={<BusinessLayout role="rider" title="骑手集散中心" />}>
          <Route path="tasks" element={<RiderTasks />} />
          <Route path="current" element={<RiderCurrent />} />
          <Route path="history" element={<RiderHistory />} />
          <Route path="profile" element={<RiderProfile />} />
          <Route path="notifications" element={<NotificationCenter role="rider" />} />
        </Route>

        {/* Admin Routes (Web 220px Left Sidebar) */}
        <Route path="/admin" element={<BusinessLayout role="admin" title="总后台管控" />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="merchants" element={<AdminMerchants />} />
          <Route path="riders" element={<AdminRiders />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="rules" element={<AdminRules />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="recommend-performance" element={<AdminRecommendPerformance />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="notifications" element={<NotificationCenter role="admin" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
