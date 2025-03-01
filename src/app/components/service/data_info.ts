import {Contacts, Education, Job, Reference, Skill} from './dto_interfaces';

export const languages: Skill[] = [
  { name: "English", progress: 80, className: "sd-progress-bar" },
  { name: "French", progress: 60, className: "sd-progress-bar" },
  { name: "Spanish", progress: 72, className: "sd-progress-bar" },
  { name: "German", progress: 55, className: "sd-progress-bar" },
  { name: "Arabic", progress: 78, className: "sd-progress-bar" }
];

export const skills: Skill[] = [
  {name:"Adobe Photoshop", progress:85, className: "mn-progress-bar"},
  {name:"Adobe Illustrator", progress:40, className: "mn-progress-bar"},
  {name:"Microsoft Word", progress:60, className: "mn-progress-bar"},
  {name:"Microsoft Powerpoint", progress:60, className: "mn-progress-bar"},
  {name:"HTML-5/CSS-3", progress:85, className: "mn-progress-bar"}
];

export const hobbies: Skill[] = [
  {name:"Book Reading", progress:85, className: "mn-progress-bar"},
  {name:"Travelling", progress:60, className: "mn-progress-bar"},
  {name:"Playing chess", progress:72, className: "mn-progress-bar"},
  {name:"Graphic Design", progress:60, className: "mn-progress-bar"},
  {name:"Painting", progress:85, className: "mn-progress-bar"}
];

export const jobs: Job[] = [
  {year:"2021 - Present", company:"Creative Agency", city:"Chicago", position:"SENIOR WEB DESIGNER", className: "job"},
  {year:"2018 - 2021", company:"Creative Market", city:"United Kingdom", position:"GRAPHIC DESIGNER", className: "job"},
  {year:"2015 - 2018", company:"Marketing Agency", city:"United Kingdom", position:"MARKETING MANAGER", className: "job"},
  {year:"2013 - 2015", company:"Creative Agency", city:"Chicago", position:"JUNIO WEB DESIGNER", className: "job"}
]

export const education: Education[] = [
  {year:"2011 - 2023", university:"Stanford University", degree:"MASTER DEGREE", className: "degree",
    description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"},
  {year:"2007 - 2010", university:"Chicago University", degree:"BACHELOR DEGREE", className: "degree",
    description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"}
];

export const reference: Reference[] = [
  {name:"DARWIN B. MAGANA", address:"2813 Shade Lane Mancos, CO.", phone:"+1-970-533-3339", email: "www.yourwebsite.com" },
  {name:"Robert J. Belvin", address:"2813 Shade Lane Mancos, CO.", phone:"+1-908-987-5103", email: "www.yourwebsite.com" }
];

export const contacts: Contacts[] = [
  {icon:"Phone.png", text:"+1-718-310-5588" },
  {icon:"Web.png", text:"yourwebsite.com" },
  {icon:"Location.png", text:"769 Prudence Street Lincoln, Park, MI 48146" }
];
