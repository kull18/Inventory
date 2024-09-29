import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../shared/components/header-admin/header-admin.component";
import { AdminFooterComponent } from "../../shared/components/admin-footer/admin-footer.component";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [HeaderAdminComponent, AdminFooterComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

}
