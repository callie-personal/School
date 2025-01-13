using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace NorthwindDataBindingDemo
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		public MainWindow()
		{
			InitializeComponent();
		}

		private void HomeButton_Click(object sender, RoutedEventArgs e)
		{
			mainFrame.NavigationService.Navigate(new Pages.HomePage());
		}

		private void EmployeeButton_Click(object sender, RoutedEventArgs e)
		{
			mainFrame.NavigationService.Navigate(new Pages.EmployeesPage());
		}

		private void CustomerButton_Click(object sender, RoutedEventArgs e)
		{
			mainFrame.NavigationService.Navigate(new Pages.CustomersPage());
		}

		private void ProductButton_Click(object sender, RoutedEventArgs e)
		{
			mainFrame.NavigationService.Navigate(new Pages.ProductsPage());
		}
	}
}