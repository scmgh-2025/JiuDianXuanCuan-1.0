import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  CheckCircle2, 
  LayoutDashboard, 
  MapPin, 
  Bot, 
  Utensils, 
  UserCheck 
} from "lucide-react";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section className={`py-20 px-6 ${className}`} id={id}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Section className="bg-slate-50" id="guizhou-practice">
        <div className="mb-20">
          <motion.div {...fadeIn} className="flex items-center gap-2.5 mb-8">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
            <h4 className="text-xl font-bold text-slate-800">
              "黄小西" 智能体产品生态
            </h4>
          </motion.div>

          {/* 第一层：多彩黄小西 - 单独居中，横向布局 */}
          <div className="flex justify-center mb-12">
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.05 }}
              className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-2 border-blue-200 p-8 rounded-[32px] hover:shadow-2xl hover:border-blue-300 transition-all w-full max-w-[680px]"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* 左侧：文字内容 */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-blue-600 shadow-lg">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-slate-900 text-2xl">多彩黄小西</h5>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    覆盖"吃、住、行、游、购、娱"全链条的"全省一站式旅游智能服务总入口"
                  </p>
                  
                  <div className="space-y-2 text-slate-500 text-sm">
                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>一站式旅游服务平台</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>智能行程规划推荐</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>本地特色文化体验</span>
                    </div>
                  </div>
                </div>

                {/* 右侧：机模 */}
                <div className="w-full max-w-[140px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-[28px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100 shrink-0 transition-transform duration-300 hover:scale-[1.2] hover:z-10">
                  <div className="w-full h-full bg-slate-100 rounded-[24px] overflow-hidden relative">
                    <div className="absolute top-14 -left-0.5 w-0.5 h-5 bg-slate-400 rounded-full"></div>
                    <div className="absolute top-24 -left-0.5 w-0.5 h-7 bg-slate-400 rounded-full"></div>
                    <div className="absolute top-20 -right-0.5 w-0.5 h-9 bg-slate-400 rounded-full"></div>
                    <img src="./dchxx.png" alt="多彩黄小西" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 连接线装饰 - 美化版树状分支（4个分支） */}
          <div className="flex justify-center mb-10">
            <div className="relative w-[80%] max-w-[800px] h-12">
              {/* 主干线 - 从顶部中心向下 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-blue-300 to-blue-400 rounded-full"></div>
              
              {/* 水平分支线 */}
              <div className="absolute top-6 left-[12%] right-[12%] h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full"></div>
              
              {/* 四个向下的分支线 */}
              <div className="absolute top-6 left-[12%] w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full"></div>
              <div className="absolute top-6 left-[37%] w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full"></div>
              <div className="absolute top-6 left-[63%] w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full"></div>
              <div className="absolute top-6 right-[12%] w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full"></div>
              
              {/* 装饰性圆点 */}
              <div className="absolute top-5 left-[12%] -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute top-5 left-[37%] -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute top-5 left-[63%] -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute top-5 right-[12%] translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-md"></div>
            </div>
          </div>

          {/* 第二层：4个智能体卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Card 1: 景区智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-150 p-4 rounded-[24px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-3 mx-auto text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-slate-900 text-base mb-3">景区智能体</h5>
                
                <div className="space-y-1.5 mb-4 text-slate-500 text-xs inline-block text-left">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>智能导览与讲解</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>票务分时预约</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>客流预警引导</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 1 */}
              <div className="w-full max-w-[120px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[24px] p-1 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100 transition-transform duration-300 hover:scale-[1.2] hover:z-10">
                <div className="w-full h-full bg-slate-100 rounded-[20px] overflow-hidden relative">
                  <div className="absolute top-12 -left-0.5 w-0.5 h-4 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-20 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-18 -right-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <img src="./景区智能体.png" alt="景区智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: 酒店智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.15 }}
              className="bg-white border border-slate-150 p-4 rounded-[24px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-3 mx-auto text-blue-600">
                  <Bot className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-slate-900 text-base mb-3">酒店智能体</h5>
                
                <div className="space-y-1.5 mb-4 text-slate-500 text-xs inline-block text-left">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>入住咨询与房型介绍</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>智能推荐与周边服务</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>客户关怀与满意度调查</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 2 */}
              <div className="w-full max-w-[120px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[24px] p-1 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100 transition-transform duration-300 hover:scale-[1.2] hover:z-10">
                <div className="w-full h-full bg-slate-100 rounded-[20px] overflow-hidden relative">
                  <div className="absolute top-12 -left-0.5 w-0.5 h-4 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-20 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-18 -right-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <img src="./2.jpg" alt="酒店智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: 餐饮智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="bg-white border border-slate-150 p-4 rounded-[24px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-3 mx-auto text-blue-600">
                  <Utensils className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-slate-900 text-base mb-3">餐饮智能体</h5>
                
                <div className="space-y-1.5 mb-4 text-slate-500 text-xs inline-block text-left">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>菜单推荐与口味偏好</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>排队预约与在线取号</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>优惠推送与食材溯源</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 3 */}
              <div className="w-full max-w-[120px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[24px] p-1 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100 transition-transform duration-300 hover:scale-[1.2] hover:z-10">
                <div className="w-full h-full bg-slate-100 rounded-[20px] overflow-hidden relative">
                  <div className="absolute top-12 -left-0.5 w-0.5 h-4 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-20 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-18 -right-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <img src="./餐饮智能体.jpg" alt="餐饮智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 4: 个人智能体 */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.25 }}
              className="bg-white border border-slate-150 p-4 rounded-[24px] flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all text-center h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-3 mx-auto text-blue-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-slate-900 text-base mb-3">个人智能体</h5>
                
                <div className="space-y-1.5 mb-4 text-slate-500 text-xs inline-block text-left">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>AI 帮讲故事</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>24h 在线接待</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>咨询秒回撮合</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup 4 */}
              <div className="w-full max-w-[120px] mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-[24px] p-1 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100 transition-transform duration-300 hover:scale-[1.2] hover:z-10">
                <div className="w-full h-full bg-slate-100 rounded-[20px] overflow-hidden relative">
                  <div className="absolute top-12 -left-0.5 w-0.5 h-4 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-20 -left-0.5 w-0.5 h-6 bg-slate-400 rounded-full"></div>
                  <div className="absolute top-18 -right-0.5 w-0.5 h-8 bg-slate-400 rounded-full"></div>
                  <img src="./个人智能体.png" alt="个人智能体" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* 第三层：B端工作台 - 全宽展示 */}
          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.35 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-[24px] hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-xl">B端工作台</h5>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  为酒店、景区、餐饮等商家提供B端工作台，工作台配置了多个专业 AI 角色，形成虚拟员工团队，助力商家精细化运营。
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-start gap-10 pl-0 md:pl-16">
                {/* 左侧机模 */}
                <div className="w-full max-w-[140px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-[28px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100 transition-transform duration-300 hover:scale-[1.2] hover:z-10">
                  <div className="w-full h-full bg-slate-100 rounded-[24px] overflow-hidden relative">
                    {/* Side buttons */}
                    <div className="absolute top-14 -left-0.5 w-0.5 h-5 bg-slate-400 rounded-full"></div>
                    <div className="absolute top-24 -left-0.5 w-0.5 h-7 bg-slate-400 rounded-full"></div>
                    <div className="absolute top-20 -right-0.5 w-0.5 h-9 bg-slate-400 rounded-full"></div>
                    <img src="./11.png" alt="B端工作台-左" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* 右侧机模 */}
                <div className="w-full max-w-[140px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-[28px] p-1.5 shadow-2xl overflow-hidden aspect-[9/18] text-left flex flex-col font-sans relative group cursor-pointer border border-slate-100 transition-transform duration-300 hover:scale-[1.2] hover:z-10">
                  <div className="w-full h-full bg-slate-100 rounded-[24px] overflow-hidden relative">
                    {/* Side buttons */}
                    <div className="absolute top-14 -left-0.5 w-0.5 h-5 bg-slate-400 rounded-full"></div>
                    <div className="absolute top-24 -left-0.5 w-0.5 h-7 bg-slate-400 rounded-full"></div>
                    <div className="absolute top-20 -right-0.5 w-0.5 h-9 bg-slate-400 rounded-full"></div>
                    <img src="./12.png" alt="B端工作台-右" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
