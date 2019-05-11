menggunakan bahasa visual studio 2012

1. - Name(string) = tambahkan 1 textbox dan 1 button,double klik pada button

	Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
       	     MsgBox("Name : " + TextBox1.Text)
    	End Sub

   - Address(string) = tambahkan 1 Richtextboxt dan 1 button,double klik pada button

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        MsgBox("Address : " + RichTextBox1.Text)
    End Sub

   - Hobby(array) = tambahkan 3 checkbox(propertis = name[checkbox1 = sp, checkbox2 = bd, checkbox3 = ft] dan text[checkbox1 = Sepak Bola, checkbox2 = Badminton, checkbox3 = Futsal]) dan 1 button, double klik pada button
    
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If sp.Checked = True And bd.Checked = True And ft.Checked = True Then
            MsgBox("Hobby : " + sp.Text + "," + ft.Text + " dan " + bd.Text)
        ElseIf sp.Checked = True And bd.Checked = True Then
            MsgBox("Hobby : " + sp.Text + " dan " + bd.Text)
        ElseIf bd.Checked = True And ft.Checked = True Then
            MsgBox("Hobby : " + ft.Text + " dan " + bd.Text)
        ElseIf sp.Checked = True And ft.Checked = True Then
            MsgBox("Hobby : " + sp.Text + " dan " + ft.Text)
        ElseIf sp.Checked = True Then
            MsgBox("Hobby : " + sp.Text)
        ElseIf ft.Checked = True Then
            MsgBox("Hobby : " + ft.Text)
        ElseIf bd.Checked = True Then
            MsgBox("Hobby : " + bd.Text)
        End If
     End Sub

   - is_married(Boolean) = tambahkan 2 Radiobutton(propertis = name[Radiobutton1 = sm, Radiobutton2 = bm] dan text[Radiobutton1 = Sudah Menikah, Radiobutton2 = Belum Menikah]) dan 1 button, double klik pada button
   
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If sm.Checked = True Then
            MsgBox("Is_Married : " + sm.Text)
        ElseIf bm.Checked = True Then
            MsgBox("Is_Married : " + bm.Text)
        End If
    End Sub

   - School(Obj) = tambahkan 3 ComboBox(propertis = name[ComboBox1 = cmbpilih,ComboBox2 = cmbsekolah,ComboBox3 = cmbkampus] dan Item(comboBox1[Sekolah,Kampus],Combobox2[SMKN1 Kab.Tangerang,SMKN2 Kab.Tangerang,SMKN3 Kab.Tangerang,SMKN4 Kab.Tangerang,SMKN5 Kab.Tangerang], Combobox3[UMT ,UNVAS,UGM,UIN Banten,RAHARJA]))
	- Double Klik Pada ComboBox1

	  Private Sub cmbpilih_SelectedIndexChanged(sender As Object, e As EventArgs) Handles cmbpilih.SelectedIndexChanged
            If cmbpilih.Text = "Sekolah" Then
              cmbkampus.Enabled = False
              cmbsekolah.Enabled = True
            ElseIf cmbpilih.Text = "Kampus" Then
              cmbkampus.Enabled = True
              cmbsekolah.Enabled = False
            End If
           End Sub

	- Double Klik Pada Button1
	 Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
           If cmbkampus.Enabled = True Then
             MsgBox("School : " + cmbkampus.Text)
           ElseIf cmbsekolah.Enabled = True Then
             MsgBox("School : " + cmbsekolah.Text)
           End If
         End Sub

   - skills(array and Obj) = tambahkan 1 Combobox(propertis name[Akreditasi],item[Sangat Baik,Baik,Cukup,Kurang Baik,Sangat Kurang Baik]) 1 TextBoxt(propertis name[txtskor]) 1 Button 
	- Double Klik Pada Combobox
 	  Private Sub Akreditasi_SelectedIndexChanged(sender As Object, e As EventArgs) Handles Akreditasi.SelectedIndexChanged
           If Akreditasi.Text = "Sangat Baik" Then
            txtskor.Text = "100"
           ElseIf Akreditasi.Text = "Baik" Then
            txtskor.Text = "80"
           ElseIf Akreditasi.Text = "Cukup" Then
            txtskor.Text = "60"
           ElseIf Akreditasi.Text = "Kurang Baik" Then
            txtskor.Text = "40"
           ElseIf Akreditasi.Text = "Sangat Kurang Baik" Then
            txtskor.Text = "20"
           End If
          End Sub 
        - Double Klik Pada Button
          Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
           If Akreditasi.Text = "Sangat Baik" Then
            MsgBox("Skills : " + "Name : " + Akreditasi.Text + " Score : " & txtskor.Text)
           ElseIf Akreditasi.Text = "Baik" Then
            MsgBox("Skills : " + "Name : " + Akreditasi.Text + " Score : " & txtskor.Text)
           ElseIf Akreditasi.Text = "Cukup" Then
            MsgBox("Skills : " + "Name : " + Akreditasi.Text + " Score : " & txtskor.Text)
           ElseIf Akreditasi.Text = "Kurang Baik" Then
            MsgBox("Skills : " + "Name : " + Akreditasi.Text + " Score : " & txtskor.Text)
           ElseIf Akreditasi.Text = "Sangat Kurang Baik" Then
            MsgBox("Skills : " + "Name : " + Akreditasi.Text + " Score : " & txtskor.Text)
           End If
          End Sub