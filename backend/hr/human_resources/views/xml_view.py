from django.http import HttpResponse
from rest_framework.response import Response
from io import StringIO
from django.views import View


class XmlView(View):
    def export_table(self):
        s = '''

<root>
  <B>
    <PiQgYytU>mK</PiQgYytU>
    <nGtQMg3>Lr</nGtQMg3>
    <l_dtLd>-359547560</l_dtLd>
    <QqDBKzxh>1497192102</QqDBKzxh>
    <P>-93083530</P>
    <DtRiqT>
      <big9Z>-1251007790</big9Z>
      <T54qgxDZdy>
        <mA-Zf>ECFFgb</mA-Zf>
        <z>
          <S3LCte4>{mNkF!`P</S3LCte4>
          <cxLRIhfi/>
          <xmEggf>
            <gFXYlIwYu>
              <T8mP>
                <_GXB0DUOa>-1094528573.7500966</_GXB0DUOa>
                <N>808889008.806412</N>
                <LFXMn>736755974</LFXMn>
                <zSwk4yshh>i3</zSwk4yshh>
                <eY4U44x8h>
                  <H>
                    <Nci>-36354606.40473962</Nci>
                    <SPXp7qV7t>((Z&gt;]vkmR_</SPXp7qV7t>
                    <m50C1oo_R>-o4X4X#</m50C1oo_R>
                    <i>&gt;')z8e0[FD</i>
                    <cBcz_l>QEd#$%k$</cBcz_l>
                    <LfhmPVoKC/>
                  </H>
                  <x36RPo8R>
                    <AdbGvJSx>lcX=nn2*X</AdbGvJSx>
                    <u>128821035</u>
                    <ChZ2y05>&gt;\!N</ChZ2y05>
                    <lPXcW>-1562117909</lPXcW>
                    <wftT6RZII4>P"#:&gt;</wftT6RZII4>
                    <xQ1kVQ3fh>tG]</xQ1kVQ3fh>
                  </x36RPo8R>
                  <R>Gm</R>
                  <iirm1FRqR>187860204.8133428</iirm1FRqR>
                  <_My>5M[-</_My>
                  <T3JglgC>|</T3JglgC>
                </eY4U44x8h>
                <h>[zuI@^L</h>
              </T8mP>
              <eiZc>R&amp;CnHyKX5</eiZc>
              <q>-233195701</q>
              <bxDcg>y_n_YR-</bxDcg>
              <y17nYOkz>yCcm,c</y17nYOkz>
              <Q-JMEZK>7lX)</Q-JMEZK>
            </gFXYlIwYu>
            <w>WE_</w>
            <RPk>}$a</RPk>
            <kG17>-1035223121.3639</kG17>
            <C6KHStz/>
            <AAxrE088YS>1112407618</AAxrE088YS>
          </xmEggf>
          <H3BSK>wFS,P_</H3BSK>
          <f/>
          <R8t0yuOROG>}</R8t0yuOROG>
        </z>
        <cMxf8BJ>-1795362520.3240628</cMxf8BJ>
        <XmmtO0_T>Jr&gt;!U-nr</XmmtO0_T>
        <ILACV4HF>669433244</ILACV4HF>
        <_Gp2m6>MkM#nbY)9</_Gp2m6>
      </T54qgxDZdy>
      <lFO_>1922689346.3486528</lFO_>
      <ZN53>+J</ZN53>
      <_>270432447.59796286</_>
      <jImmZY>-1692149993</jImmZY>
    </DtRiqT>
  </B>
  <ppWqeteD/>
  <K>-578206135</K>
  <fGcIih>578447448</fGcIih>
  <o>L}&lt;{</o>
  <M/>
</root>
        '''
        return s

    def get(self, request):
        xmlstring = self.export_table()
        file = StringIO(xmlstring)
        response = HttpResponse(file, content_type='application/xml')
        response['Content-Disposition'] = 'attachment; filename=backup.xml'
        return response
