import React from 'react';
import { ClipboardEdit, FileText, ListChecks, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Path = () => {
  return (
    <section id="path" className="section bg-purple-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Започнете пътуването на вашето дете с <span className="text-purple-600">4 лесни </span>стъпки</h2>
          <p className="text-gray-600 text-lg">Правим лесно намирането на перфектните курсове за уникалните интереси и таланти на вашето дете.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Step 1 */}
          <div className="card p-8 flex flex-col items-center text-center transition-all hover:translate-y-[-8px]">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <ClipboardEdit size={28} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Регистрирайте се</h3>
            <p className="text-gray-600">Създайте акаунт, за да започнете персонализираното учебно пътуване на вашето дете с KnowMe.</p>
          </div>

          {/* Step 2 */}
          <div className="card p-8 flex flex-col items-center text-center transition-all hover:translate-y-[-8px]">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <FileText size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Попълнете персоналния тест</h3>
            <p className="text-gray-600">Чрез него ще разберем за интересите и силните страни на вашето дете, за да можем да го насочим в правилната посока.</p>
          </div>

          {/* Step 3 */}
          <div className="card p-8 flex flex-col items-center text-center transition-all hover:translate-y-[-8px]">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <ListChecks size={28} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Разгледайте нашите предложения</h3>
            <p className="text-gray-600">Вижте най - подходящите активности за вашето дете: изкуства, спорт, технологии, наука и много други.</p>
          </div>

          {/* Step 4 */}
          <div className="card p-8 flex flex-col items-center text-center transition-all hover:translate-y-[-8px]">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <Star size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">4. Споделяйте какво мислите</h3>
            <p className="text-gray-600">Важното е да бъде коректно оценявано всяко изживяване, за да получим възможно най-точна преценка за възможностите и интересите на вашето дете.</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 h-auto">
            Започнете още днес
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Path;
