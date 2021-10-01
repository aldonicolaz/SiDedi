using Serenity.Navigation;
using MyPages = SDD.View.Pages;

//[assembly: NavigationLink(int.MaxValue, "View/View Maaster Form", typeof(MyPages.ViewMaasterFormController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "View/View All Penghasilan", typeof(MyPages.ViewAllPenghasilanController), icon: null)]
[assembly: NavigationMenu(11000, "View", icon: "fa-database")]
[assembly: NavigationLink(int.MaxValue, "View/Penghasilan Penduduk", typeof(MyPages.ViewUserPenghasilanController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "View/Penghasilan Desa", typeof(MyPages.VChartPenghasilanDesaController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "View/View Profil User", typeof(MyPages.ViewProfilUserController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "View/View All Pengajuan", typeof(MyPages.ViewAllPengajuanController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "View/View User Pengajuan", typeof(MyPages.ViewUserPengajuanController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "View/Status Pengajuan Formulir", typeof(MyPages.ViewTransaksiFormulirController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "View/V Chart By All Pekerjaan", typeof(MyPages.VChartByAllPekerjaanController), icon: null)]