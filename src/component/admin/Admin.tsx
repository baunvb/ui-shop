import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import Navbar from '../navbar/Navbar';

const AdminPage = ({ children }) => {
  return (
    <AdminPageStyle>
      <Navbar />
      <PageContent>
        {children}
      </PageContent>
    </AdminPageStyle>
  );
}

const AdminPageStyle = styled.div`
  display: flex;
  text-align: center;
  box-sizing: border-box;
  height: 100vh;
  flex-direction: row;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
`

const PageContent = styled.div`
  padding: 28px;
  width: 100%;
  min-width: 1024px;
  overflow-y: auto;
`

export default AdminPage;
