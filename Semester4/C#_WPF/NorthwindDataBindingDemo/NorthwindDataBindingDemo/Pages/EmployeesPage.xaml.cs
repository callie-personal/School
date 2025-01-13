using Microsoft.EntityFrameworkCore;
using NorthwindDataBindingDemo.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace NorthwindDataBindingDemo.Pages
{
	/// <summary>
	/// Interaction logic for EmployeesPage.xaml
	/// </summary>
	public partial class EmployeesPage : Page
	{
		NorthwindContext context = new NorthwindContext();
		CollectionViewSource employeeViewSource = new CollectionViewSource();

		public EmployeesPage()
		{
			InitializeComponent();
			//tie the markup viewsource object to the C# code object
			employeeViewSource = (CollectionViewSource)FindResource(nameof(employeeViewSource));
			//use db context to load the data for page
			context.Employees.Load();
			//set the source of the viewsource object to the local collection of employees
			employeeViewSource.Source = context.Employees.Local.ToObservableCollection();
		}

		private void Button_Click(object sender, RoutedEventArgs e)
		{
			context.SaveChanges();
		}
	}
}