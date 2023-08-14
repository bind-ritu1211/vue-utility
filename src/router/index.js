import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Description from "@/views/home/DescriptionView"
import ContactUs from "@/views/home/ContactUs"
import Brain from "@/views/plans/BrainView"
import MraBrain from "@/views/plans/MraBrain"
import DwiIam from "@/views/plans/DwiIam"
import MaliGnant from "@/views/plans/MaliGnant"
import OrbitsView from "@/views/plans/OrbitsView"
import PlanElipsy from "@/views/plans/PlanElipsy"
import PlanIams from "@/views/plans/PlanIams"
import PlanPns from "@/views/plans/PlanPns"
import PlanSella from "@/views/plans/PlanSella"
import PlanTMJS from "@/views/plans/PlanTMJS"
import PlanTrigeminal from "@/views/plans/PlanTrigeminal"
import PlanFace from "@/views/plans/PlanFace"
import PlanTissueNeck from "@/views/plans/PlanTissueNeck"
import PlanSialography from "@/views/plans/PlanSialography"
import PlanSubclavians from "@/views/plans/PlanSubclavians"
import PlanCervicalSpine from "@/views/plans/PlanCervicalSpine"
import PlanChest from "@/views/plans/PlanChest"
import PaediatricBrain from "@/views/plans/PaediatricBrain"
import PlanSternum from "@/views/plans/PlanSternum"
import PlanClavicle from "@/views/plans/PlanClavicle"
import PlanthroracicSpine from "@/views/plans/PlanthroracicSpine"
import PlanCardiacMri from "@/views/plans/PlanCardiacMri"
import PlanCardiacStress from "@/views/plans/PlanCardiacStress"
import PlanMriKidney from "@/views/plans/PlanMriKidney"
import PlanMriRenals from "@/views/plans/PlanMriRenals"
import PlanAdrenals from "@/views/plans/PlanAdrenals"
import PlanLiver from "@/views/plans/PlanLiver"
import PlanMRCP from "@/views/plans/PlanMRCP"
import PlanPancreas from "@/views/plans/PlanPancreas"
import PlanSecStimulatedMRCP from "@/views/plans/PlanSecStimulatedMRCP"
import PlanSmellBowel from "@/views/plans/PlanSmellBowel"
import PlanMraMrvAbdomen from "@/views/plans/PlanMraMrvAbdomen"
import PlanBreast from "@/views/plans/PlanBreast"
import PlanBreastImplants from "@/views/plans/PlanBreastImplants"
import PlanRectCaPelvis from "@/views/plans/PlanRectCaPelvis"
import PlanAntAbdominalAall from "@/views/plans/PlanAntAbdominalAall"
import PlanPelvishUrinaryBladder from "@/views/plans/PlanPelvishUrinaryBladder"
import PlanFemaleUrethra from "@/views/plans/PlanFemaleUrethra"
import PlanProstatePelvis from "@/views/plans/PlanProstatePelvis"
import PlanSoftTissuePenis from "@/views/plans/PlanSoftTissuePenis"
import PlanMriTestis from "@/views/plans/PlanMriTestis"
import PlanGynePelvis from "@/views/plans/PlanGynePelvis"
import PlanRectovaginalFis from "@/views/plans/PlanRectovaginalFis"
import PlanDefecatingProctogram from "@/views/plans/PlanDefecatingProctogram"
import PlanHips from "@/views/plans/PlanHips"
import PlanArthoHips from "@/views/plans/PlanArthoHips"
import PlanPsoas from "@/views/plans/PlanPsoas"
import PlanLumbarSpine from "@/views/plans/PlanLumbarSpine"
import PlanSiJoints from "@/views/plans/PlanSiJoints"
import PlanPbsrlPlexus from "@/views/plans/PlanPbsrlPlexus"
import PlanKub from "@/views/plans/PlanKub"
import PlanMrUrography from "@/views/plans/PlanMrUrography"
import PlanThighs from "@/views/plans/PlanThighs"
import PlanKnee from "@/views/plans/PlanKnee"
import PlanLowerLeg from "@/views/plans/PlanLowerLeg"
import PlanAnkle from "@/views/plans/PlanAnkle"
import PlanFoot from "@/views/plans/PlanFoot"
import PlanMraLegs from "@/views/plans/PlanMraLegs"
import PlanShoulder from "@/views/plans/PlanShoulder"
import PlanScapula from "@/views/plans/PlanScapula"
import PlanArthoShoulder from "@/views/plans/PlanArthoShoulder"
import PlanHumerus from "@/views/plans/PlanHumerus"
import PlanElbow from "@/views/plans/PlanElbow"
import PlanForearm from "@/views/plans/PlanForearm"
import PlanWrist from "@/views/plans/PlanWrist"
import PlanMraUpperArm from "@/views/plans/PlanMraUpperArm"
import PlanMraHand from "@/views/plans/PlanMraHand"
import PlanSpinalCord from "@/views/plans/PlanSpinalCord"
import PlanMultipleSlrsProtocol from "@/views/plans/PlanMultipleSlrsProtocol"
import PlanMraBody from "@/views/plans/PlanMraBody"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      layout: "AppNavBarHome",
    },
  },
  {
    path: "/description",
    name: "description",
    component: Description,  
  },
  {
    path: "/plan-brain",
    name: "brain",
    component: Brain,  
  },
  {
    path: "/plan-mra-brain",
    name: "mra-brain",
    component: MraBrain,  
  },
  {
    path: "/plan-dwi",
    name: "DwiIam",
    component: DwiIam,  
  },
  {
    path: "/plan-malignant",
    name: "malignant",
    component: MaliGnant,  
  },
  {
    path: "/plan-orbits",
    name: "Orbits",
    component: OrbitsView,  
  },
  {
    path: "/plan-paediatric",
    name: "paediatric",
    component: PaediatricBrain,  
  },
  {
    path: "/plan-elipsy",
    name: "elipsy",
    component: PlanElipsy,  
  },
  {
    path: "/plan-iams",
    name: "Iams",
    component: PlanIams,  
  },
  {
    path: "/plan-pns",
    name: "PNS",
    component: PlanPns,  
  },
  {
    path: "/plan-sella",
    name: "sella",
    component: PlanSella,  
  },
  {
    path: "/plan-tmjs",
    name: "TMJS",
    component: PlanTMJS,  
  },
  {
    path: "/plan-trigeminal",
    name: "plan-trigeminal",
    component: PlanTrigeminal,  
  },
  {
    path: "/plan-face",
    name: "plan-face",
    component: PlanFace,  
  },
  {
    path: "/plan-stn",
    name: "plan-soft-tissue-neck",
    component: PlanTissueNeck,  
  },
  {
    path: "/plan-sialography",
    name: "plan-sialography",
    component: PlanSialography,  
  },
  {
    path: "/plan-cervical-spine",
    name: "plan-cervical-spine",
    component: PlanCervicalSpine,  
  },
  {
    path: "/plan-subclavians",
    name: "plan-subclavians",
    component: PlanSubclavians,  
  },
  {
    path: "/plan-chest",
    name: "plan-chest",
    component: PlanChest,  
  },
  {
    path: "/plan-sternum",
    name: "plan-sternum",
    component: PlanSternum,  
  },
  {
    path: "/plan-clavicle",
    name: "plan-clavicle",
    component: PlanClavicle,  
  },
  {
    path: "/plan-throracic-spine",
    name: "plan-throracic-spine",
    component: PlanthroracicSpine,  
  },
  {
    path: "/plan-cardiac-mri",
    name: "plan-cardiac-mri",
    component: PlanCardiacMri,  
  },
  {
    path: "/plan-cardiac-stress",
    name: "plan-cardiac-stress",
    component: PlanCardiacStress,  
  },
  {
    path: "/plan-mri-kidney",
    name: "plan-mri-kidney",
    component: PlanMriKidney,  
  },
  {
    path: "/plan-mri-renals",
    name: "plan-mri-renals",
    component: PlanMriRenals,  
  },
  {
    path: "/plan-adrenals",
    name: "plan-adrenals",
    component: PlanAdrenals,  
  },
  {
    path: "/plan-liver",
    name: "plan-liver",
    component: PlanLiver,  
  },
  {
    path: "/plan-mrcp",
    name: "plan-mrcp",
    component: PlanMRCP,  
  },
  {
    path: "/plan-pancreas",
    name: "plan-pancreas",
    component: PlanPancreas,  
  },
  {
    path: "/plan-sec-stimulated-mrcp",
    name: "plan-sec-stimulated-mrcp",
    component: PlanSecStimulatedMRCP,  
  },
  {
    path: "/plan-smell-bowel",
    name: "plan-smell-bowel",
    component: PlanSmellBowel,  
  },
  {
    path: "/plan-mra-&-mrv-abdomen",
    name: "plan-mra-&-mrv-abdomen",
    component: PlanMraMrvAbdomen,  
  },
  {
    path: "/plan-breast",
    name: "plan-breast",
    component: PlanBreast,  
  },
  {
    path: "/plan-breast-implants",
    name: "plan-breast-implants",
    component: PlanBreastImplants,  
  },
  {
    path: "/plan-rect-ca-p",
    name: "plan-rect-ca-p",
    component: PlanRectCaPelvis,  
  },
  {
    path: "/plan-ant-abdominal-wall",
    name: "plan-ant-abdominal-wall",
    component: PlanAntAbdominalAall,  
  },
  {
    path: "/plan-pelvish-urinary-bladder",
    name: "plan-pelvish-urinary-bladder",
    component: PlanPelvishUrinaryBladder,  
  },
  {
    path: "/plan-f-urethra",
    name: "plan-f-urethra",
    component: PlanFemaleUrethra,  
  },
  {
    path: "/plan-prostate-pelvis",
    name: "plan-prostate-pelvis",
    component: PlanProstatePelvis,  
  },
  {
    path: "/plan-soft-tissue-p",
    name: "plan-soft-tissue-p",
    component: PlanSoftTissuePenis,  
  },
  {
    path: "/plan-mri-testis",
    name: "plan-mri-testis",
    component: PlanMriTestis,  
  },
  {
    path: "/plan-gyne-pelvis",
    name: "plan-gyne-pelvis",
    component: PlanGynePelvis,  
  },
  {
    path: "/plan-rect-fis",
    name: "plan-rect-fis",
    component: PlanRectovaginalFis,  
  },
  {
    path: "/plan-d-proctogram",
    name: "plan-d-proctogram",
    component: PlanDefecatingProctogram,  
  },
  {
    path: "/plan-hips",
    name: "plan-hips",
    component: PlanHips,  
  },
  {
    path: "/plan-artho-hips",
    name: "plan-artho-hips",
    component: PlanArthoHips,  
  },
  {
    path: "/plan-psoas",
    name: "plan-psoas",
    component: PlanPsoas,  
  },
  {
    path: "/plan-lumbar-spine",
    name: "plan-lumbar-spine",
    component: PlanLumbarSpine,  
  },
  {
    path: "/plan-si-joints",
    name: "plan-si-joints",
    component: PlanSiJoints,  
  },
  {
    path: "/plan-lbsrl-plexus",
    name: "plan-",
    component: PlanPbsrlPlexus,  
  },
  {
    path: "/plan-kub",
    name: "plan-kub",
    component: PlanKub,  
  },
  {
    path: "/plan-mr-uro",
    name: "plan-mr-uro",
    component: PlanMrUrography,  
  },
  {
    path: "/plan-thighs",
    name: "plan-thighs",
    component: PlanThighs,  
  },
  {
    path: "/plan-knee",
    name: "plan-knee",
    component: PlanKnee,  
  },
  {
    path: "/plan-lower-leg",
    name: "plan-lower-leg",
    component: PlanLowerLeg,  
  },
  {
    path: "/plan-ankle",
    name: "plan-ankle",
    component: PlanAnkle,  
  },
  {
    path: "/plan-foot",
    name: "plan-foot",
    component: PlanFoot,  
  },
  {
    path: "/plan-mra-legs",
    name: "plan-mra-legs",
    component: PlanMraLegs,  
  },
  {
    path: "/plan-shoulder",
    name: "plan-shoulder",
    component: PlanShoulder,  
  },
  {
    path: "/plan-scapula",
    name: "plan-scapula",
    component: PlanScapula,  
  },
  {
    path: "/plan-artho-shoulder",
    name: "plan-artho-shoulder",
    component: PlanArthoShoulder,  
  },
  {
    path: "/plan-humerus",
    name: "plan-humerus",
    component: PlanHumerus,  
  },
  {
    path: "/plan-elbow",
    name: "plan-elbow",
    component: PlanElbow,  
  },
  {
    path: "/plan-forearm",
    name: "plan-forearm",
    component: PlanForearm,  
  },
  {
    path: "/plan-wrist",
    name: "plan-wrist",
    component: PlanWrist,  
  },
  {
    path: "/plan-mra-upper-arm",
    name: "plan-mra-upper-arm",
    component: PlanMraUpperArm,  
  },
  {
    path: "/plan-mra-hand",
    name: "plan-mra-hand",
    component: PlanMraHand,  
  },
  {
    path: "/plan-spinal-cord",
    name: "plan-spinal-cord",
    component: PlanSpinalCord,  
  },
  {
    path: "/plan-multiple-slrsis-protocol",
    name: "plan-multiple-slrsis-protocol",
    component: PlanMultipleSlrsProtocol,  
  },
  {
    path: "/plan-mra-body",
    name: "plan-mra-body",
    component: PlanMraBody,  
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,  
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
