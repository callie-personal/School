using NorthwindDataBindingDemo.Data;
using Microsoft.EntityFrameworkCore;
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
	/// Interaction logic for CustomersPage.xaml
	/// </summary>
	public partial class ProductsPage : Page
	{
		NorthwindContext context = new NorthwindContext();
		CollectionViewSource productViewSource = new CollectionViewSource();
		public ProductsPage()
		{
			InitializeComponent();

			productViewSource = (CollectionViewSource)FindResource(nameof(productViewSource));
			context.Products.Load();
			productViewSource.Source = context.Products.Local.ToObservableCollection();
		}
	}
}
