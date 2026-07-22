import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  Brain,
  CheckCircle2,
  AlertCircle,
  Clock,
  Target,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { submitInquiry } from "../services/contactService";


const benefits = [
  {
    title: "AI Opportunity Matrix",
    description:
      "Identify high-impact AI opportunities across operations, IT, customer experience and business processes.",
    icon: Target,
  },
  {
    title: "Executive Roadmap",
    description:
      "Receive a phased AI adoption strategy aligned with your business priorities.",
    icon: TrendingUp,
  },
  {
    title: "ROI Assessment",
    description:
      "Understand potential productivity gains, automation opportunities and efficiency improvements.",
    icon: Brain,
  },
  {
    title: "Enterprise Ready",
    description:
      "Recommendations designed around security, governance and scalable adoption.",
    icon: ShieldCheck,
  },
];


const stats = [
  {
    value: "17+",
    label: "Years Enterprise Experience",
  },
  {
    value: "100+",
    label: "AI Use Cases",
  },
  {
    value: "7 Min",
    label: "Assessment Time",
  },
  {
    value: "Enterprise",
    label: "Security First",
  },
];


function AssessmentPage() {

  const shouldReduceMotion = useReducedMotion();


  const [form, setForm] = useState({

    type: "assessment",

    name: "",

    email: "",

    company: "",

    industry: "Retail",

    companySize: "51-250 employees",

    challenge: "IT Operations",

    erp: "Microsoft Dynamics",

    aiUsage: "Exploring",

    timeline: "6 Months",

    goals: "",

  });



  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });


  const [isSubmitting, setIsSubmitting] = useState(false);



  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;


    setForm((current)=>({
      ...current,
      [name]: value,
    }));

  };



  const handleSubmit = async(e)=>{

    e.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type:"idle",
      message:"",
    });


    try {


      await submitInquiry(form);


      setStatus({

        type:"success",

        message:
        "Your AI readiness assessment has been submitted. Our team will review your opportunities and connect with you shortly.",

      });



      setForm({

        type:"assessment",

        name:"",

        email:"",

        company:"",

        industry:"Retail",

        companySize:"51-250 employees",

        challenge:"IT Operations",

        erp:"Microsoft Dynamics",

        aiUsage:"Exploring",

        timeline:"6 Months",

        goals:"",

      });


    }
    catch(error){


      setStatus({

        type:"error",

        message:
        error.message ||
        "Unable to submit assessment. Please email hello@nurexa.ca.",

      });


    }
    finally{

      setIsSubmitting(false);

    }

  };



return (

<>

<Helmet>

<title>
Enterprise AI Readiness Assessment | Nurexa
</title>


<meta

name="description"

content="Discover AI opportunities, automation possibilities and digital transformation roadmap with Nurexa's Enterprise AI Readiness Assessment."

/>

</Helmet>



<div className="relative overflow-hidden bg-slate-950">


{/* Animated Background */}


<div className="absolute inset-0">


<motion.div

animate={{
x:[0,80,0],
y:[0,-50,0],
}}

transition={{
duration:14,
repeat:Infinity,
}}

className="
absolute
left-10
top-20
h-72
w-72
rounded-full
bg-cyan-500/20
blur-[120px]
"

/>



<motion.div

animate={{
x:[0,-60,0],
y:[0,70,0],
}}

transition={{
duration:16,
repeat:Infinity,
}}

className="
absolute
right-20
top-40
h-80
w-80
rounded-full
bg-purple-500/20
blur-[140px]
"

/>



</div>





<section className="relative px-4 py-24 sm:px-6 lg:px-8">


<div className="mx-auto max-w-7xl">


<motion.div

initial={
shouldReduceMotion
? false
:{
opacity:0,
y:30
}
}


animate={{
opacity:1,
y:0,
}}

transition={{
duration:.7
}}

className="
rounded-[2.5rem]
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
lg:p-14
"


>


<div className="grid gap-12 lg:grid-cols-2">



<div>


<div className="flex items-center gap-3">


<Brain className="h-10 w-10 text-cyan-400"/>


<p className="
text-sm
font-semibold
uppercase
tracking-[0.3em]
text-cyan-300
">

Enterprise AI Assessment

</p>


</div>



<h1 className="
mt-8
text-5xl
font-bold
leading-tight
text-white
lg:text-6xl
">


Discover Where AI Can Transform Your Business


</h1>



<p className="
mt-8
text-xl
leading-9
text-slate-300
">


Complete our 7-minute assessment and receive a personalized AI roadmap highlighting automation opportunities, productivity improvements and transformation priorities.


</p>



<div className="
mt-10
grid
gap-4
sm:grid-cols-2
">


{stats.map((item,index)=>(


<motion.div

key={item.label}

whileHover={{
y:-5
}}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-5
"


>


<h3 className="
text-3xl
font-bold
text-cyan-400
">

{item.value}

</h3>


<p className="
mt-2
text-sm
text-slate-400
">

{item.label}

</p>


</motion.div>


))}


</div>


{/* RIGHT SIDE FORM */}

<div>

<motion.div

initial={{
opacity:0,
x:30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
rounded-[2rem]
border
border-white/10
bg-slate-900/70
p-8
backdrop-blur-xl
"

>

<h2 className="
text-2xl
font-bold
text-white
">

Start Your AI Readiness Assessment

</h2>


<p className="
mt-3
text-sm
text-slate-400
">

Tell us about your organization and we'll identify where AI can create measurable impact.

</p>



<form
onSubmit={handleSubmit}
className="mt-8 space-y-5"
>



<div className="grid gap-5 md:grid-cols-2">


<div>

<label className="mb-2 block text-sm text-slate-300">
Name
</label>


<input

required

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your name"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
outline-none
focus:border-cyan-400
"

/>

</div>




<div>

<label className="mb-2 block text-sm text-slate-300">
Business Email
</label>


<input

required

type="email"

name="email"

value={form.email}

onChange={handleChange}

placeholder="you@company.com"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
outline-none
focus:border-cyan-400
"

/>


</div>


</div>





<div>

<label className="mb-2 block text-sm text-slate-300">
Company
</label>


<input

name="company"

value={form.company}

onChange={handleChange}

placeholder="Company name"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
outline-none
focus:border-cyan-400
"

/>


</div>






<div className="grid gap-5 md:grid-cols-2">


<div>

<label className="mb-2 block text-sm text-slate-300">
Industry
</label>


<select

name="industry"

value={form.industry}

onChange={handleChange}

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
"

>

<option>Retail</option>
<option>Manufacturing</option>
<option>Healthcare</option>
<option>Finance</option>
<option>Technology</option>
<option>Logistics</option>
<option>Other</option>

</select>


</div>





<div>

<label className="mb-2 block text-sm text-slate-300">
Company Size
</label>


<select

name="companySize"

value={form.companySize}

onChange={handleChange}

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
"

>

<option>
1-50 employees
</option>

<option>
51-250 employees
</option>

<option>
251-1000 employees
</option>

<option>
1000+ employees
</option>


</select>


</div>



</div>






<div className="grid gap-5 md:grid-cols-2">


<div>

<label className="mb-2 block text-sm text-slate-300">
Primary Challenge
</label>


<select

name="challenge"

value={form.challenge}

onChange={handleChange}

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
"

>

<option>
IT Operations
</option>

<option>
Customer Experience
</option>

<option>
Manual Processes
</option>

<option>
Reporting & Analytics
</option>

<option>
Cybersecurity
</option>

<option>
Supply Chain
</option>

<option>
Finance Automation
</option>


</select>


</div>





<div>

<label className="mb-2 block text-sm text-slate-300">
Current AI Usage
</label>


<select

name="aiUsage"

value={form.aiUsage}

onChange={handleChange}

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
"

>

<option>
No AI Adoption
</option>

<option>
Exploring
</option>

<option>
Pilot Projects
</option>

<option>
Production Usage
</option>


</select>


</div>


</div>







<div>


<label className="mb-2 block text-sm text-slate-300">
What would you like to improve?
</label>


<textarea

name="goals"

value={form.goals}

onChange={handleChange}

rows="4"

placeholder="
Examples: reduce tickets, automate reporting, improve customer support, optimize operations
"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
outline-none
focus:border-cyan-400
"

/>


</div>






{status.message && (

<motion.div

initial={{
opacity:0,
scale:.95
}}

animate={{
opacity:1,
scale:1
}}

className={`
flex
gap-3
rounded-xl
border
px-4
py-3
text-sm
${
status.type==="success"
?
"border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
:
"border-red-400/40 bg-red-500/10 text-red-200"
}

`}

>


{
status.type==="success"
?
<CheckCircle2 size={18}/>
:
<AlertCircle size={18}/>
}


<span>
{status.message}
</span>


</motion.div>


)}






<motion.button

disabled={isSubmitting}

whileHover={{
scale:1.03
}}

whileTap={{
scale:.97
}}

type="submit"

className="
flex
w-full
items-center
justify-center
gap-3
rounded-xl
bg-cyan-500
px-6
py-4
font-semibold
text-white
transition
hover:bg-cyan-400
disabled:opacity-60
"

>


{
isSubmitting
?
"Analyzing..."
:
"Generate My AI Roadmap"
}


<ArrowRight size={20}/>


</motion.button>



</form>


</motion.div>


</div>



</div>


</motion.div>


</div>


</section>





{/* BENEFITS SECTION */}


<section className="
relative
px-4
pb-24
sm:px-6
lg:px-8
">


<div className="
mx-auto
max-w-7xl
">


<h2 className="
text-center
text-4xl
font-bold
text-white
">

What You Receive

</h2>



<div className="
mt-12
grid
gap-6
md:grid-cols-2
lg:grid-cols-4
">


{benefits.map(
({
title,
description,
icon:Icon
})=>(


<motion.div

key={title}

whileHover={{
y:-10
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
"


>


<div className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-cyan-500/20
">


<Icon
className="
h-7
w-7
text-cyan-300
"
/>


</div>



<h3 className="
mt-6
text-xl
font-semibold
text-white
">

{title}

</h3>



<p className="
mt-3
text-sm
leading-7
text-slate-400
">

{description}

</p>



</motion.div>


))}


</div>


</div>


</section>





{/* FINAL CTA */}


<section className="
relative
px-4
pb-28
sm:px-6
lg:px-8
">


<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
mx-auto
max-w-5xl
rounded-[3rem]
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
via-indigo-500/10
to-purple-500/10
p-12
text-center
"

>


<Clock className="
mx-auto
h-10
w-10
text-cyan-300
"/>


<h2 className="
mt-6
text-4xl
font-bold
text-white
">

Start Your AI Transformation Journey

</h2>


<p className="
mx-auto
mt-5
max-w-2xl
text-lg
text-slate-300
">

Discover practical AI opportunities that improve productivity,
reduce operational complexity and create measurable business value.

</p>



</motion.div>


</section>


</div>


</>

);

}


export default AssessmentPage;